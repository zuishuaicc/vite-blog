---
outline: deep
---

# nestjs 项目实战

## 一、初始化 nestjs 项目

### 1.环境准备

操作系统：支持 `macOS`，`Linux`，`Windows`  
运行环境：请确保在您的操作系统上安装了 `Node.js (>= 10.13.0，v13 除外)`。

### 2.创建项目

```bash
# 全局安装nest cli
pnpm add -g @nestjs/cli
# 通过nest cli创建一个新的nest项目
nest new nest-app
```

初始化过程中可选择喜欢的 `nodejs` 包管理工具，个人推荐 pnpm

### 3.安装依赖

生产依赖：

```bash
pnpm add prisma-binding ts-node @prisma/client mockjs @nestjs/config class-validator class-transformer argon2 @nestjs/passport passport passport-local @nestjs/jwt passport-jwt lodash multer dayjs express redis @nestjs/throttler mockjs @nestjs/cache-manager cache-manager md5 @casl/prisma @casl/ability
```

开发依赖：

```bash
pnpm add -D prisma typescript @types/node @types/mockjs @nestjs/mapped-types @types/passport-local @types/passport-jwt @types/express @types/lodash @types/multer @types/cache-manager @types/md5
```

注意事项:

ts-node 要安装在 dependencies

### 4.配置 prettierrc

NestJs 项目创建后会生成`.prettierrc` 文件，这是代码格式化规范，

```json
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "proseWrap": "never",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "singleAttributePerLine": false
}
```

### 5.初始化 prisma

```bash
npx prisma init
```

执行完成后，会在项目根目录生成 prisma 文件夹；  
在 prisma 文件夹下，手动创建 `seed.ts` 文件，用于默认数据填充；  
在`package.json`文件中添加 prisma 数据填充执行文件路径；

```diff
{
  "name": "nest-app",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
+  "prisma":{
+    "seed":"ts-node prisma/seed.ts"
+  },
  "scripts": {
    ···脚本
  },
  "dependencies": {
   ···生产依赖
  },
  "devDependencies": {
   ···开发依赖
  },
  "jest": {
    ···jest配置
  }
}

```

### 6.配置 mysql 地址

打开`.env`文件

```ts
DATABASE_URL = "mysql://root:123456@localhost:33060/nest-blog"
```

uri 格式为:`{数据库类型}://{用户名}:{密码}@{数据库ip地址或域名}:{端口号}/{数据库名字}`

### 7.创建数据库模型

打开`prisma`文件夹中的`schema.prisma`文件

```ts
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
model user {
  id Int @id @default(autoincrement()) @db.UnsignedInt//非负整数
  name String @unique//唯一索引
  password String
  role String?
}
model category {
  id Int @id @default(autoincrement()) @db.UnsignedSmallInt
  title String
  article article[]
}
model article{
  id Int @id @default(autoincrement()) @db.UnsignedInt
  title String
  content String @db.Text
  categoryId Int @db.UnsignedSmallInt
  category category @relation(fields: [categoryId], references: [id],onDelete: Cascade)
  createdAt DateTime @default(now())
  updateAt DateTime @updatedAt
}
```

数据库模型创建完成后，需要跑迁移文件命令,在数据库生成对应的库和表

```bash
npx prisma migrate dev
```

### 8.完成填充文件

在`prisma/seed.ts`文件中

```ts
import { PrismaClient } from "@prisma/client"
import { hash } from "argon2"
import { Random } from "mockjs"
import { random } from "lodash"
const prisma = new PrismaClient()
async function run() {
  await prisma.user.create({
    data: {
      name: "管理员",
      password: await hash("admin888"),
      role: "admin",
    },
  })
  for (let i = 1; i <= 5; i++) {
    await prisma.category.create({
      data: {
        title: Random.ctitle(10, 30),
      },
    })
  }
  for (let i = 0; i < 50; i++) {
    await prisma.article.create({
      data: {
        title: Random.ctitle(10, 30),
        content: Random.cparagraph(30, 50),
        categoryId: random(1, 5),
      },
    })
  }
}
run()
```

之后在运行命令重置数据库生成填充数据

```bash
npx prisma migrate reset
```

## 二、登陆模块实现

### 1.创建登陆模块

```bash
# 创建登录模块
nest g mo auth
# 创建控制器
nest g co auth --no-spec
# 创建登录服务
nest g s auth --no-spec
```

### 2.编写 controller

```ts
import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"

@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post("register")
  register(@Body() body: any) {
    return body
  }
  @Post("login")
  login(@Body() body: any) {
    return body
  }
}
```

### 3.编写 dto

auth 文件夹下新建`dto/login.dto.ts`

```ts
import { IsNotEmpty } from "class-validator"
export default class LoginDto {
  @IsNotEmpty({ message: "用户名不能为空" })
  name: string
  @IsNotEmpty({ message: "密码不能为空" })
  password: string
}
```

auth 文件夹下新建`dto/register.dto.ts`

```ts
import { IsNotEmpty } from "class-validator"
export default class RegisterDto {
  @IsNotEmpty({ message: "用户名不能为空" })
  name: string
  @IsNotEmpty({ message: "密码不能为空" })
  password: string
  @IsNotEmpty({ message: "确认密码不能为空" })
  password_confirm: string
}
```

### 4.使用表单验证管道

① 新建 `src/common/validator.ts` 管道文件

```ts
import { HttpException, HttpStatus, ValidationError, ValidationPipe } from "@nestjs/common"
export default class Validate extends ValidationPipe {
  // 格式化字段错误报文
  protected flattenValidationErrors(validationErrors: ValidationError[]): string[] {
    const errors = {}
    // 遍历所有错误字段集合
    validationErrors.forEach((error) => {
      errors[error.property] = Object.values(error.constraints)[0]
    })
    throw new HttpException({ code: 422, message: errors }, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}
```

② 在 `src/main.ts` 中注册管道

```ts
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import Validate from "./common/validate"
import { NestExpressApplication } from "@nestjs/platform-express"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 注册全局验证管道
  app.useGlobalPipes(new Validate())
  await app.listen(3000)
}
bootstrap()
```

③ 在 `src/common/rule/is-not-exist.ts` 创建表字段唯一验证规则

```ts
import { PrismaClient } from "@prisma/client"
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"
// 校验表字段唯一
export function IsNotExistsRule(table: string, validationOption?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsNotExistsRule",
      target: object.constructor,
      propertyName,
      constraints: [table],
      options: validationOption,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient()
          const res = await prisma[table].findFirst({
            where: {
              [args.property]: value,
            },
          })
          return !Boolean(res)
        },
      },
    })
  }
}
```

④ 在 register 的 dto 中使用校验规则，login 同理

```diff
import { IsNotEmpty } from "class-validator"
+import { IsNotExistsRule } from "src/common/rules/is-not-exist.rule"
export default class RegisterDto {
  @IsNotEmpty({ message: "用户名不能为空" })
+  @IsNotExistsRule("user", { message: "用户已经注册" })
  name: string
  @IsNotEmpty({ message: "密码不能为空" })
  password: string
  @IsNotEmpty({ message: "确认密码不能为空" })
  password_confirm: string
}
```

⑤ 在 controller 中使用 register 的 dto，login 同理

```ts
import { Body, Controller, Post } from "@nestjs/common"
import RegisterDto from "./dto/register.dto"
import LoginDto from "./dto/login.dto"

@Controller()
export class AuthController {
  constructor() {}
  @Post("register")
  register(@Body() dto: RegisterDto) {
    return dto
  }
  @Post("login")
  login(@Body() dto: LoginDto) {
    return dto
  }
}
```

⑥ 重复 ③、④ 步，新增`src/common/rule/is-exist.rule.ts`、`src/common/rule/is-confirm.rule.ts`规则  
`src/common/rule/is-exist.rule.ts`:

```ts
import { PrismaClient } from "@prisma/client"
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"
// 校验表字段唯一
export function IsExistsRule(table: string, validationOption?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsExistsRule",
      target: object.constructor,
      propertyName,
      constraints: [table],
      options: validationOption,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient()
          const res = await prisma[table].findFirst({
            where: {
              [args.property]: value,
            },
          })
          return Boolean(res)
        },
      },
    })
  }
}
```

`src/common/rule/is-confirm.rule.ts`:

```ts
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"
// 校验两个字端是否一致
export function IsConfirm(validationOption?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsConfirm",
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOption,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          return Boolean(value === args.object[`${args.property}_confirm`])
        },
      },
    })
  }
}
```

`login.dto.ts`:

```ts
import { IsNotEmpty } from "class-validator"
import { IsExistsRule } from "src/common/rules/is-exist.rule"
export default class LoginDto {
  @IsNotEmpty({ message: "用户名不能为空" })
  @IsExistsRule("user", { message: "账号不存在" })
  name: string
  @IsNotEmpty({ message: "密码不能为空" })
  password: string
}
```

`register.dto`:

```ts
import { IsNotEmpty } from "class-validator"
import { IsConfirm } from "src/common/rules/is-confirm.rule"
import { IsNotExistsRule } from "src/common/rules/is-not-exist.rule"
export default class RegisterDto {
  @IsNotEmpty({ message: "用户名不能为空" })
  @IsNotExistsRule("user", { message: "用户已经注册" })
  name: string
  @IsNotEmpty({ message: "密码不能为空" })
  @IsConfirm({ message: "两次密码不一致" })
  password: string
  @IsNotEmpty({ message: "确认密码不能为空" })
  password_confirm: string
}
```

### 5.编写 service 层

```ts
import { BadRequestException, Injectable } from "@nestjs/common"
import RegisterDto from "./dto/register.dto"
import LoginDto from "./dto/login.dto"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async register(dto: RegisterDto) {
    return dto
  }
  async login(dto: LoginDto) {
    return dto
  }
}
```

### 6.在 controller 层使用 service

```ts
import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import RegisterDto from "./dto/register.dto"
import LoginDto from "./dto/login.dto"

@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post("register")
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto)
  }
  @Post("login")
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto)
  }
}
```

## 三、prisma 模块实现

### 1.创建 prisma 模块和服务

```bash
# 创建prisma模块
nest g mo prisma
# 创建prisma服务
nest g s prisma --no-spec
```

### 2.编写 prisma 的 service

`src/prisma/prisma.service.ts`:

```ts
import { Injectable } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: ["query"], //prisma日志类型
    })
  }
}
```

### 3.编写 primsa 的 module

`src/prisma/prisma.module.ts`:

```ts
import { Global, Module } from "@nestjs/common"
import { PrismaService } from "./prisma.service"

@Global() //定义为全局模块，在其他模块import后，不需要在provider中声明
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### 4.在 auth 的 service 中使用 prisma

```ts
import { BadRequestException, Injectable } from "@nestjs/common"
import RegisterDto from "./dto/register.dto"
import { PrismaService } from "src/prisma/prisma.service"
import { hash, verify } from "argon2"
import { user } from "@prisma/client"
import LoginDto from "./dto/login.dto"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return user
  }
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        name: dto.name,
      },
    })
    if (!(await verify(user.password, dto.password))) {
      throw new BadRequestException("密码输入错误")
    }
    return tuser
  }
}
```

## 四、jwt 模块实现

### 1.在`auth.module.ts`中导入 jwt 模块

```ts
import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { JwtModule } from "@nestjs/jwt"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtStrategy } from "./strategy/jwt.strategy"

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule], //使用配置项模块动态配置jwt的密钥
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: config.get("TOKEN_SECRET"),
          signOptions: { expiresIn: "100d" },
        }
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
```

### 2.在`.env`文件中写入密钥

```txt
TOKEN_SECRET = 'zuishuaicc'
```

### 3.在 auth 的 service 中使用 jwt 的 service

```ts
import { BadRequestException, Injectable } from "@nestjs/common"
import RegisterDto from "./dto/register.dto"
import { PrismaService } from "src/prisma/prisma.service"
import { hash, verify } from "argon2"
import { user } from "@prisma/client"
import { JwtService } from "@nestjs/jwt"
import LoginDto from "./dto/login.dto"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return await this.token(user)
  }
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        name: dto.name,
      },
    })
    if (!(await verify(user.password, dto.password))) {
      throw new BadRequestException("密码输入错误")
    }
    return this.token(user)
  }

  private async token({ name, id }: user) {
    return {
      token: await this.jwt.signAsync({ name: name, sub: id }),
    }
  }
}
```

## 五、使用拦截器格式化响应数据

### 1.新建`src/transform.interceptor.ts`:

```ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { Observable } from "rxjs"

import { map } from "rxjs/operators"
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        // 拦截器格式化返回数据的格式
        return data?.meta
          ? data
          : {
              data,
            }
      })
    )
  }
}
```

### 2.全局注册该拦截器

`src/main.ts`:

```ts
import { NestFactory, Reflector } from "@nestjs/core"
import { AppModule } from "./app.module"
import Validate from "./common/validate"
import { TransformInterceptor } from "./transform.interceptor"
import { NestExpressApplication } from "@nestjs/platform-express"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 注册全局验证管道
  app.useGlobalPipes(new Validate())
  // 注册全局响应数据格式化拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000)
}
bootstrap()
```

## 六、通过 ts 配置别名导入

`tsconfig.json`:

```diff
{
  "compilerOptions": {
    // 其他配置
    ···
+    "paths": {
+      "@/*":["src/*"]
+    }
  }
}

```

## 七、文章列表增删改查

### 1. 创建资源(包含 module、controller、 service、dto)

```bash
nest g res article --no-spec
```

### 2. 编写 dto

`create-article.dto.ts`:

```ts
import { IsNotEmpty } from "class-validator"

export class CreateArticleDto {
  @IsNotEmpty({ message: "文章标题不能为空" })
  title: string
  @IsNotEmpty({ message: "文章内容不能为空" })
  content: string
  @IsNotEmpty({ message: "文章栏目id不能为空" })
  categoryId: number
}
```

`update-article.dto.ts`:

```ts
import { PartialType } from "@nestjs/mapped-types"
import { CreateArticleDto } from "./create-article.dto"

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
```

### 3. 编写增删改查 service

```ts
import { Injectable } from "@nestjs/common"
import { CreateArticleDto } from "./dto/create-article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { PrismaService } from "@/prisma/prisma.service"
import { ConfigService } from "@nestjs/config"

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  async create(createArticleDto: CreateArticleDto) {
    return await this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        categoryId: +createArticleDto.categoryId,
      },
    })
  }

  async findAll(args: Record<string, any>) {
    const row = Number(this.config.get("ARTICLE_PAGE_ROW"))
    const page = args.page ? args.args : 1
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: row,
      where: {
        category: args.category ? { id: args.category } : {},
      },
      include: {
        category: true,
      },
    })
    const total = await this.prisma.article.count({
      where: {
        category: args.category ? { id: args.category } : {},
      },
    })
    return {
      meta: {
        current_page: page,
        page_row: row,
        total: total,
        total_page: Math.ceil(total / row),
      },
      data: articles,
    }
  }

  async findOne(id: number) {
    return await this.prisma.article.findFirst({
      where: {
        id,
      },
    })
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return await this.prisma.article.update({
      where: { id },
      data: { ...updateArticleDto, categoryId: +updateArticleDto.categoryId },
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: {
        id,
      },
    })
  }
}
```

### 4. 在`.env`文件中写入每页文章数配置

```ts
DATABASE_URL="mysql://root:123456@localhost:33060/nest-blog"
# token密钥
TOKEN_SECRET="zuishuaicc"
# 每页文章数
ARTICLE_PAGE_ROW=10
```

### 5. 全局导入 Config 模块

`app.module.ts`:

```ts
import { Module } from "@nestjs/common"
import { AuthModule } from "./auth/auth.module"
import { PrismaModule } from "./prisma/prisma.module"
import { ArticleModule } from "./article/article.module"
import { ConfigModule } from "@nestjs/config"
import { CategoryModule } from "./category/category.module"
import { UploadModule } from "./upload/upload.module"

@Module({
  imports: [AuthModule, PrismaModule, ArticleModule, ConfigModule.forRoot({ isGlobal: true }), CategoryModule, UploadModule],
})
export class AppModule {}
```

### 6、修改 controller 层

```ts
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common"
import { ArticleService } from "./article.service"
import { CreateArticleDto } from "./dto/create-article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { Article } from "./entities/article.entity"

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get()
  findAll(@Query() args = {}) {
    return this.articleService.findAll(args)
  }

  @Get(":id")
  // @SerializeOptions({ strategy: 'excludeAll' })
  async findOne(@Param("id") id: string) {
    const article = await this.articleService.findOne(+id)
    return new Article(article)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.remove(+id)
  }
}
```

## 八、全局设置 api 请求前缀

`main.ts`:

```ts
import { NestFactory, Reflector } from "@nestjs/core"
import { AppModule } from "./app.module"
import Validate from "./common/validate"
import { TransformInterceptor } from "./transform.interceptor"
import { NestExpressApplication } from "@nestjs/platform-express"
import { ClassSerializerInterceptor } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 注册全局验证管道
  app.useGlobalPipes(new Validate())
  // 注册全局响应数据格式化拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 设置全局请求前缀
  app.setGlobalPrefix("api")
  await app.listen(3000)
}
bootstrap()
```

## 九、token 身份验证

### 1.编写策略文件

`src/auth/strategy/jwt.strategy.ts`:

```ts
import { PrismaService } from "@/prisma/prisma.service"
import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(configService: ConfigService, private prisma: PrismaService) {
    super({
      // 解析用户提交的Bearer Token header数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 加密的secret
      secretOrKey: configService.get("TOKEN_SECRET"),
    })
  }
  // 验证通过后解析用户资料
  async validate({ sub: id }) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
```

### 2.在使用模块中注册策略

`auth.module.ts`

```ts
import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { JwtModule } from "@nestjs/jwt"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtStrategy } from "./strategy/jwt.strategy"

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: config.get("TOKEN_SECRET"),
          signOptions: { expiresIn: "100d" },
        }
      },
    }),
  ],
  providers: [AuthService, JwtStrategy], //注册策略
  controllers: [AuthController],
})
export class AuthModule {}
```

### 3.在 controller 上使用 jwt 策略

```ts
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { CategoryService } from "./category.service"
import { CreateCategoryDto } from "./dto/create-category.dto"
import { UpdateCategoryDto } from "./dto/update-category.dto"

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(AuthGuard("jwt")) //使用策略
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.categoryService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.categoryService.remove(+id)
  }
}
```

## 十.使用聚合装饰器封装 jwt 策略

### 1.创建角色枚举

新建文件`src/auth/enum.ts`:

```ts
export enum Role {
  ADMIN = "admin",
  EDITOR = "editor",
}
```

### 2.创建自定义守卫

```bash
nest g gu auth/guards/role --no-spec
```

### 3.编写自定义守卫

`src/auth/guards/role.guard.ts`:

```ts
import { Role } from "@/auth/enum"
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { user } from "@prisma/client"
import { Observable } from "rxjs"

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user as user
    // 获取SetMetadata方法存储在上下文中的的roles数据源
    const roles = this.reflector.getAllAndMerge<Role[]>("roles", [context.getHandler(), context.getClass()])
    return roles.length ? roles.some((role) => role === user.role) : true
  }
}
```

### 4.编写聚合装饰器

新建文件`src/decorator/auth.decorator.ts`:

```ts
import { Role } from "@/auth/enum"
import { RoleGuard } from "@/auth/guards/role.guard"
import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"

export function Auth(...roles: Role[]) {
  return applyDecorators(SetMetadata("roles", roles), UseGuards(AuthGuard("jwt"), RoleGuard))
}
```

### 5.controller 中使用聚合装饰器

```ts
import { Role } from "@/auth/enum"
import { Auth } from "@/decorator/auth.decorator"
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { CategoryService } from "./category.service"
import { CreateCategoryDto } from "./dto/create-category.dto"
import { UpdateCategoryDto } from "./dto/update-category.dto"

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Auth(Role.EDITOR, Role.ADMIN)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.categoryService.findOne(+id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.categoryService.remove(+id)
  }
}
```

## 十一、上传文件

### 1. 创建上传模块

```bash
nest g s upload --no-spec
nest g co upload --no-spec
```

### 2.导入 MulterModule 模块注册

`src/upload/upload.module.ts`:

```ts
import { Global, Module } from "@nestjs/common"
import { UploadService } from "./upload.service"
import { MulterModule } from "@nestjs/platform-express"
import { diskStorage } from "multer"
import { extname } from "path"
import { UploadController } from "./upload.controller"

@Global()
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: diskStorage({
            // 文件存储位置
            destination: "uploads",
            // 文件名定制
            filename: (req, file, callback) => {
              const path = Date.now() + "-" + Math.round(Math.random() * 1e10) + extname(file.originalname)
              callback(null, path)
            },
          }),
        }
      },
    }),
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
```

### 3.编写上传装饰器

`src/upload/upload.ts`:

```ts
import { applyDecorators, UnsupportedMediaTypeException, UseInterceptors } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface"

// 上传类型验证
function fileFilter(type: string) {
  return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
    // 判断文件类型是否允许上传
    const mimeType = file.mimetype.split("/")[0]
    if (!mimeType.includes(type)) {
      callback(new UnsupportedMediaTypeException("文件类型错误"), false)
    } else {
      callback(null, true)
    }
  }
}
// 文件上传
export function upload(field = "file", options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(field, options)))
}
// 图片上传
export function image(field = "file") {
  return upload(field, {
    limits: Math.pow(1024, 2) * 2,
    fileFilter: fileFilter("image"),
  } as MulterOptions)
}
// 文档文件上传
export function document(field = "file") {
  return upload(field, {
    limits: Math.pow(1024, 2) * 5,
    fileFilter: fileFilter("document"),
  } as MulterOptions)
}
```

### 4.在上传的 controller 使用装饰器

```ts
import { Controller, Post, UploadedFile } from "@nestjs/common"
import { image } from "./upload"

@Controller("upload")
export class UploadController {
  @Post("image")
  @image()
  image(@UploadedFile() file: Express.Multer.File) {
    return {
      url: `http://localhost:3000/${file.path}`,
    }
  }
}
```

### 4.修改返回文件路径前缀

```ts
import { NestFactory, Reflector } from "@nestjs/core"
import { AppModule } from "./app.module"
import Validate from "./common/validate"
import { TransformInterceptor } from "./transform.interceptor"
import { NestExpressApplication } from "@nestjs/platform-express"
import { ClassSerializerInterceptor } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 注册全局验证管道
  app.useGlobalPipes(new Validate())
  // 注册全局响应数据格式化拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 设置全局请求前缀
  app.setGlobalPrefix("api")
  // 设置静态目录
  app.useStaticAssets("uploads", { prefix: "/uploads" })

  await app.listen(3000)
}
bootstrap()
```

## 十二、序列化响应

### 1.注册序列化拦截器

```ts
import { NestFactory, Reflector } from "@nestjs/core"
import { AppModule } from "./app.module"
import Validate from "./common/validate"
import { TransformInterceptor } from "./transform.interceptor"
import { NestExpressApplication } from "@nestjs/platform-express"
import { ClassSerializerInterceptor } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 注册全局验证管道
  app.useGlobalPipes(new Validate())
  // 注册全局响应数据格式化拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 设置全局请求前缀
  app.setGlobalPrefix("api")
  // 设置静态目录
  app.useStaticAssets("uploads", { prefix: "/uploads" })
  // 全局注册响应内时间序列化事件拦截器(也可对单个controller使用)
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  await app.listen(3000)
}
bootstrap()
```

### 2. 使用 entries 处理响应数据

`src/article/entities/article.entity.ts`:

```ts
import { article } from "@prisma/client"
import { Transform } from "class-transformer"
import * as dayjs from "dayjs"

export class Article {
  @Transform(({ value }) => dayjs(value).format("YYYY-MM-DD"))
  createdAt: string
  @Transform(({ value }) => dayjs(value).format("YYYY-MM-DD"))
  updateAt: string
  constructor(options: Partial<article>) {
    Object.assign(this, options)
  }
}
```

### 3.使用 entries 处理 service 返回的结果

```ts
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common"
import { ArticleService } from "./article.service"
import { CreateArticleDto } from "./dto/create-article.dto"
import { UpdateArticleDto } from "./dto/update-article.dto"
import { Article } from "./entities/article.entity"

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get()
  findAll(@Query() args = {}) {
    return this.articleService.findAll(args)
  }

  @Get(":id")
  // @SerializeOptions({ strategy: 'excludeAll' })
  async findOne(@Param("id") id: string) {
    const article = await this.articleService.findOne(+id)
    // 使用entries处理service返回的结果
    return new Article(article)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.articleService.remove(+id)
  }
}
```
