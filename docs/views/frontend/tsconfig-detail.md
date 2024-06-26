---
outline: deep
---
# tsconfig.json详细配置

### tsconfig.json 文件 说明

**
- tsconfig.json 文件  //  ts 的类型配置文件 tsconfig.json是ts编译器的配置文件，ts编译器可根据它的信息来对代码进行编译
- "include"用来指定哪些ts文件需要被编译,数组，可以添加多个 路径：**表示任意目录 *表示任意文件
- "exclude"不需要被编译的目录,数组，可以添加多个 路径：**表示任意目录 *表示任意文件
- “extends”:定义被继承的配置文件。
- “files”：指定被编译文件的列表，只有需要编译的文件少时才会用到，一般直接用include指定文件夹
- “compilerOptions”:编译器选项, { target：用来编译成指定的es版本的js; module指定模块化规范; lib指定项目中要用的库; outDir编译后文件的所在目录； outFile:将编译后的文件合并成一个js，设置outfile后所有的全局作用域中的额代码会合并到同一个文件中 “strict”:所有严格检查的总开关,开启时候以下检查都默认为true "allowJs"是否对js进行编译，默认为false "checkjs"是否检查js是否符合语法规范，默认为false “removeComments"编译时候是否移除注释 “noEmit”:不生成编译后的文件 “noEmitOnError”:当有错误时候不生成编译后的文件” “alwaysStrict”：编译后的文件是否使用严格模式 “noImplicitAny”:是否允许使用隐式的any类型 “noImplicitThis”:是否允许使用不明确的this “strictNullChecks”:严格检查空值 }  
**

```json
{
  // 用来配置编译选项
  "compilerOptions": {
    "target": "esnext",// 生成js 的版本，下一版本
    "module": "esnext", // 生成的module的形式，esm，cmd，amd啥的
    "strict": false, // 是否严格模式
    "jsx": "preserve", // jsx用于的开发环境，preserve/react/RN
    "importHelpers": true, // 指定是否引入tslib里的复制工具函数
    "moduleResolution": "node", // 用于选择模块解析策略 node/classic
    "experimentalDecorators": true, // 用于指定是否启用实验性的装饰器特性
    "esModuleInterop": true, // 通过导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
    "allowSyntheticDefaultImports": true, // 用于允许从没有默认导出的模块中默认导入
    "sourceMap": true, // 编译时是否生成.map文件
    "baseUrl": ".",// 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
    //用于指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载
    "types": [
      "webpack-env"
    ],
    // 用于设置模块名到基于baseUrl的路径映射
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    // 指定要包含在编译中的库文件
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  // 指定编译的文件，没有include和exclude时候用
  "file": [],
  // 指定待编译的文件
  "include": [
  // ** : 任意目录 ， * : 任意文件
    "src/**/*.ts",
  ],
  // 指定排除的文件
  "exclude": [
    "node_modules"
  ]
}

"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "jsx": "preserve", // 指定 jsx 格式
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
```
## 说明
tsconfig.json文件是 TypeScript 编译器的配置文件，TypeScript 编译器可以根据它的规则来对代码进行编译。
## 根选项

- include：指定被编译文件所在的目录。
- exclude：指定不需要被编译的目录。
- extends：指定要继承的配置文件。
- files：指定被编译的文件。
- references：项目引用，是 TS 3.0 中的一项新功能，它允许将 TS 程序组织成更小的部分。 使用小技巧：在填写路径时 ** 表示任意目录， * 表示任意文件。
## compilerOptions

 定义项目的运行时期望、JavaScript 的发出方式和位置以及与现有 JavaScript 代码的集成级别。
### 项目选项

- incremental：是否启用增量编译，指再次编译时只编译增加的内容，默认：false。
- target：指定ts编译成ES的版本。
- module：指定编译后代码使用的模块化规范。
- lib：指定项目运行时使用的库。
- outDir：指定编译后文件所在目录。
- outFile：将代码编译合并成一个文件，默认将所有全局作用域中的代码合并成一个文件。
- rootDir：指定输入文件的根目录，默认情况下当前的项目目录为根目录。
- allowJs：是否对js文件进行编译，默认：false。
- checkJs：是否检查js代码是否符合语法规范，当使用checkJs，必须使用- allowJs，默认：false。
- removeComments：是否移除注释，默认：false
- noEmit：不生成编译后的文件，默认：false。
- jsx：指定JSX代码生成用于的开发环境。
- plugins：在编辑器中运行的语言服务插件列表。
- declaration：是否生成相应的 .d.ts 声明文件，默认：false。
- declarationMap：是否为每个对应的 .d.ts 文件生成一个 Map 文件，使用该功能时，需要declaration或composite配合一起使用，默认：false。
- sourceMap：是否生成相应的Map映射的文件，默认：false。
- composite：是否开启项目编译，开启该功能，将会生成被编译文件所在的目录，同时开启declaration、declarationMap和incremental，默认：false。
- tsBuildInfoFile：指定增量编译信息文件的位置，使用该功能时，必须开启incremental选项。
- importHelpers：是否将辅助函数从 tslib 模块导入，默认：false。
- downlevelIteration：是否用于转换为旧版本的 JS 提供可迭代对象的全面支持，默认：false。
- isolatedModules：是否将每个文件转换为单独的模块，默认：false。

### 严格检查

- strict：是否启动所有严格检查的总开关，默认：false，启动后将开启所有的严格检查选项。
- alwaysStrict：是否以严格模式解析，并为每个源文件发出"use strict"，默认：false。
- noImplicitAny：是否禁止隐式的any类型，默认：false。
- noImplicitThis：是否禁止不明确类型的this，默认：false。
- strictNullChecks：是否启用严格的空检查，默认：false。
- strictBindCallApply：是否在函数上启用严格的’bind’， 'call’和’apply’方法，默认：false。
- strictFunctionTypes：是否启用对函数类型的严格检查，默认：false。
- strictPropertyInitialization：是否启用严格检查类的属性初始化，默认：false。

### 模块解析选项

- moduleResolution：指定模块解析策略，node或classic
- baseUrl：用于解析非绝对模块名的基本目录，相对模块不受影响。
- paths：用于设置模块名称基于baseUrl的路径映射关系。
- rootDirs：将多个目录放在一个虚拟目录下，运行编译后文件引入的位置发生改变，也不会报错。
- typeRoots：指定声明文件或文件夹的路径列表
- types：用来指定需要包含的模块，并将其包含在全局范围内。
- allowSyntheticDefaultImports：是否允许从没有默认导出的模块中默认导入，默认：false。
- esModuleInterop：是否通过为所有导入模块创建命名空间对象，允许CommonJS和ES模块之间的互操作性，开启改选项时，也自动开启- allowSyntheticDefaultImports选项，默认：false。
- preserveSymlinks：是否不解析符号链接的真实路径，这是为了在 Node.js 中反映相同的标志，默认：false。
- allowUmdGlobalAccess：允许您从模块文件内部访问作为全局变量的 UMD 导出，如果不使用该选项，从 UMD 模块导出需要一个导入声明，默认：false。

### Map选项

- sourceRoot：指定调试器应定位 TypeScript 文件而不是相对源位置的位置。
- mapRoot：指定调试器定位Map文件的位置，而不是生成的位置。
- inlineSourceMap：是否将Map文件内容嵌套到 JS 文件中，这会导致 JS 文件变大，但在某些情况下会很方便，默认：false。
- inlineSources：是否将 .ts 文件的原始内容作为嵌入字符串包含在 .map 文件中，默认：false。

### 附加检查

- noUnusedLocals：是否检查未使用的局部变量，默认：false。
- noUnusedParameters：是否检查未使用的参数，默认：false。
- noImplicitReturns：检查函数是否不含有隐式返回值，默认：false。
- noImplicitOverride：是否检查子类继承自基类时，其重载的函数命名与基类的函数不同步问题，默认：false。
- noFallthroughCasesInSwitch：检查switch中是否含有case没有使用break跳出，默认：false。
- noUncheckedIndexedAccess：是否通过索引签名来描述对象上有未知键但已知值的对象，默认：false。
- noPropertyAccessFromIndexSignature：是否通过" . “(obj.key) 语法访问字段和"索引”( obj["key"])， 以及在类型中声明属性的方式之间的一致性，默认：false。

### 实验选项

- experimentalDecorators：是否启用对装饰器的实验性支持，装饰器是一种语言特性，还没有完全被 JavaScript 规范批准，默认：false。
- emitDecoratorMetadata：为装饰器启用对发出类型元数据的实验性支持，默认：false。

### 高级选项

- allowUnreachableCode：是否允许无法访问的代码(undefined / true / false)，默认：undefined。
- undefined：向编辑提供建议作为警告。
- true：未使用的标签被忽略。
- false：引发有关未使用标签的编译器错误。
- allowUnusedLabels：是否允许未使用的标签(undefined / true / false)，默认：undefined。
- undefined：向编辑提供建议作为警告。
- true：未使用的标签被忽略。
- false：引发有关未使用标签的编译器错误。
- assumeChangesOnlyAffectDirectDependencies是否避免重新检查/重建所有真正可能受影响的文件，而只会重新检查/重建已更改的文件以及直接导入它们的文件，默认：false。
- charset：字符集(已弃用)，默认：utf8
- declarationDir：提供一种方法来配置发出声明文件的根目录。
- diagnostics：用于输出用于调试的诊断信息
- disableReferencedProjectLoad：是否禁用所有可用项目加载到内存中，默认：false。
- disableSizeLimit：为了避免在处理非常大的 JS 项目时可能出现的内存膨胀问题，TS 将分配的内存量有一个上限，默认：false。
- disableSolutionSearching：在编辑器中搜索查找所有引用或跳转到定义等功能时，禁止包含复合项目，默认：false。
- disableSourceOfProjectReferenceRedirect：是否禁用项目引用源重定向，默认：false。
- emitBOM：控制TypeScript在写输出文件时是否发出字节顺序标记(BOM)，默认：false。
- emitDeclarationOnly：是否只发出.d.ts 文件，不发出.js 文件，使用该选项时，需要配合 declaration 或 composite 一起使用，默认：false。
- explainFiles：解释文件，此选项用于调试文件如何成为编译的一部分，默认：false。
- extendedDiagnostics：是否查看 TS 在编译时花费的时间，默认：false。
- forceConsistentCasingInFileNames：是否区分文件系统大小写规则，默认：false。
- generateCpuProfile：在编译阶段让 TS 发出 CPU 配置文件，只能通过终端或 CLI 调用 --generateCpuProfile tsc-output.cpuprofile 。
- importsNotUsedAsValues：此标志控制如何 import 工作方式，有 3 个不同的选项：remove、preserve 和 error 。
  - jsxFactory：当使用经典的JSX运行时编译JSX元素时，更改.js文件中调用的函数，默认：React.createElement 。
  - jsxFragmentFactory：指定 JSX 片段工厂函数在指定了 jsxFactory 编译器选项的情况下针对 react JSX 发出时使用。
  - jsxImportSource：当在TS 4.1中使用 jsx 作为 react-jsx 或 react-jsxdev 时，声明用于导入jsx和jsxs工厂函数的模块说明符。
  - keyofStringsOnly：当应用具有字符串索引签名的类型时，此标志将类型操作符的键值更改为返回 string 而不是string | number，已弃用，默认：false。
- listEmittedFiles：是否将编译部分生成的文件的名称打印到终端，默认：false。
- listFiles：是否打印编译文件部分的名称，默认：false。
- maxNodeModuleJsDepth：在node_modules下搜索并加载JavaScript文件的最大依赖深度，默认：0 。
- newLine：指定发出文件时要使用的换行规则，CRLF (dos) 或 LF (unix)。
- noEmitHelpers：是否使用全局作用域助手函数提供实现，并完全关闭助手函数的发出，而不是使用 importhelper 来导入助手函数，默认：false。
- noEmitOnError：有错误时不进行编译，默认：false。
- noErrorTruncation：是否禁止截断错误消息，已弃用，默认：false。
- noImplicitUseStrict：是否禁止无隐式严格模式，默认：false。
- noLib：是否禁止自动包含任何库文件，默认：false。
- noResolve：是否禁用析后的文件添加到程序中；默认情况下，TS 会检查 import 和 reference 指令的初始文件集，并将这些解析后的文件添加到你的程序中，默认：false。
- noStrictGenericChecks：是否禁用严格的泛型检查，默认：false。
- out：该选项以不可预测或一致的方式计算最终文件位置，已弃用，
- preserveConstEnums：是否禁止删除枚举常量生成代码中的声明，默认：false。
- reactNamespace：React命名空间，使用 jsxFactory 来代替。
- resolveJsonModule：是否解析 JSON 模块，默认：false。
- skipDefaultLibCheck：是否跳过默认库声明文件的类型检查，默认：false。
- skipLibCheck：是否跳过声明文件的类型检查，这可以在编译期间以牺牲类型系统准确性为代价来节省时间，默认：false。
- stripInternal：是否禁止 JSDoc 注释中带有@internal注释的代码发出声明，默认：false。
- suppressExcessPropertyErrors：是否禁用报告过多的属性错误，默认：false。
- suppressImplicitAnyIndexErrors：是否抑制隐式any索引的错误，默认：false。
- traceResolution：当尝试调试未包含模块的原因时。启用该选项让 TypeScript 打印有关每个处理文件的解析过程的信息，默认：false。
- useDefineForClassFields：此标志用作迁移到即将推出的类字段标准版本的一部分，默认：false。

### 命令行

- preserveWatchOutput：是否在监视模式下保留过时的控制台输出，而不是每次发生更改时都清除屏幕，默认：false。
- pretty：是否使用颜色对上下文错误和消息进行样式化，默认：true。

### watchOptions

配置 TypeScript 的 --watch工作方式。

### 监视选项

- watchFile：监视单个文件的策略，默认：useFsEvents
- fixedPollingInterval：以固定时间间隔每秒多次检查每个文件的更改。
- priorityPollingInterval：每秒多次检查每个文件的更改，但使用启发式方法检查某些类型的文件的频率低于其他文件。
- dynamicPriorityPolling：使用动态队列，其中不经常修改的文件将不那么频繁地检查。
- useFsEvents：尝试使用操作系统/文件系统的本机事件进行文件更改。
- useFsEventsOnParentDirectory：尝试使用操作系统/文件系统的本机事件来监听文件父目录的变化。
- watchDirectory：在缺乏递归文件监视功能的系统下如何监视整个目录树的策略，默认：useFsEvents
- fixedPollingInterval：以固定时间间隔每秒多次检查每个目录的变化。
- dynamicPriorityPolling：使用动态队列，其中不经常修改的目录将不那么频繁地检查。
- useFsEvents：尝试使用操作系统/文件系统的本机事件进行目录更改。
- fallbackPolling：使用文件系统事件时，此选项指定当系统用完本机文件观察器和/或不支持本机文件观察器时使用的轮询策略，默认：dynamicPriorityPolling
- fixedPollingInterval：以固定时间间隔每秒多次检查每个文件的更改。
- priorityPollingInterval：每秒多次检查每个文件的更改，但使用启发式方法检查某些类型的文件的频率低于其他文件。
- dynamicPriorityPolling：使用动态队列，其中不经常修改的文件将不那么频繁地检查。
- synchronousWatchDirectory：禁用对目录的延迟监视。
- synchronousWatchDirectory：在本机不支持递归观看的平台上同步调用回调，并更新目录观察者的状态，默认：false。
- excludeDirectories：使用排除目录来大幅减少 --watch 期间被监视的文件数量.
- excludeFiles：使用excludeFiles从被监视的文件中删除一组特定的文件。

### typeAcquisition

类型获取仅对 JavaScript 项目很重要。

#### 1. 类型获取

- enable：提供在 JavaScript 项目中禁用类型获取的配置，默认：false。
- include：使用 include 来指定应从绝对类型中使用哪些类型。
- exclude：提供用于禁用 JavaScript 项目中某个模块的类型获取的配置
- disableFilenameBasedTypeAcquisition：是否禁用基于文件名的类型获取，TypeScript 的类型获取可以根据项目中的文件名推断应该添加哪些类型，默认：false。
