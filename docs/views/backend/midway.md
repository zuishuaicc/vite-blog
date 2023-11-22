---
outline: deep
---
## Midway快速入门指南
Midway 是基于渐进式理念研发的 Node.js 框架，通过自研的依赖注入容器，搭配各种上层模块，组合出适用于不同场景的解决方案。

Midway 基于 TypeScript 开发，结合了面向对象（OOP + Class + IoC）与函数式（FP + Function + Hooks）两种编程范式，并在此之上支持了 Web / 全栈 / 微服务 / RPC / Socket / Serverless 等多种场景，致力于为用户提供简单、易用、可靠的 Node.js 服务端研发体验。

### 环境准备
操作系统：支持 macOS，Linux，Windows  
运行环境：  
| Midway版本  |      开发环境 Node.js 版本要求      | 部署环境 Node.js 版本要求 |
| ------------- | :-----------: | :-----------: |
| >=v3.9.0	    | >= v14，推荐 LTS 版本          | >= v12.11.0 |
| 3.0.0 ~ 3.9.0	      |   >= v12，推荐 LTS 版本 | 	>= v12.0.0 |
| 2.x  |   >= v12，推荐 LTS 版本  | >= v10.0.0 |

### 初始化项目
```bash
npm init midway@latest -y
```
选择 koa-v3 项目进行初始化创建，项目名可以自定，比如 weather-sample。  
启动项目
```bash
npm run dev
open http://localhost:7001
```
### 编写 Controller
在 controller 目录中，新建一个 src/controller/weather.controller.ts 文件，内容如下。
```ts
import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  // 这里是装饰器，定义一个路由
  @Get('/weather')
  async getWeatherInfo(): Promise<string> {
    // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
    return 'Hello Weather!';
  }
}
```
### 添加参数处理
通过添加 @Query 装饰器，我们可以获取到 URL 上的参数。
```ts
import { Controller, Get, Query } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<string> {
    return cityId;
  }
}
```
### 编写 Service

在实际项目中，Controller 一般用来接收请求参数，校验参数，不会包括特别复杂的逻辑，复杂而复用的逻辑，我们应该封装为 Service 文件。
```ts
// src/service/weather.service.ts
import { Provide, makeHttpRequest } from '@midwayjs/core';

@Provide()
export class WeatherService {
  async getWeather(cityId: string) {
    return makeHttpRequest(`http://www.weather.com.cn/data/cityinfo/${cityId}.html`, {
      dataType: 'json',
    });
  }
}
```
### 添加类型定义
然后我们来添加定义，良好的类型定义可以帮助我们减少代码错误。  
 src/interface.ts 文件中，我们增加天气信息的数据定义。
```ts
// src/interface.ts

// ...

export interface WeatherInfo {
  weatherinfo: {
    city: string;
    cityid: string;
    temp: string;
    WD: string;
    WS: string;
    SD: string;
    AP: string;
    njd: string;
    WSE: string;
    time: string;
    sm: string;
    isRadar: string;
    Radar: string;
  }
}
```
这样，我们就可以在 Service 中进行标注了。
```ts
import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    const result = await makeHttpRequest<WeatherInfo>(`http://www.weather.com.cn/data/sk/${cityId}.html`, {
      dataType: 'json',
    });

    if (result.status === 200) {
      return result.data as WeatherInfo;
    }
  }
}
```
同时，我们修改下之前的 Controller 文件。
```ts
import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherService } from '../service/weather.service';

@Controller('/')
export class WeatherController {

  @Inject()
  weatherService: WeatherService;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {
    return this.weatherService.getWeather(cityId);
  }
}
```
### 错误处理
一般来说，每个对外的调用都需要做异常捕获，并且将异常转变为我们自己业务的错误，这样才能有更好的体验。

为此，我们需要定义一个我们自己的业务错误，创建一个 src/error/weather.error.ts 文件。
```ts
// src/error/weather.error.ts
import { MidwayError } from '@midwayjs/core';

export class WeatherEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('weather data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
```
然后，我们调整 Service 代码抛出异常。
```ts
// src/service/weather.service.ts
import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }

    try {
      const result = await makeHttpRequest<WeatherInfo>(`http://www.weather.com.cn/data/sk/${cityId}.html`, {
        dataType: 'json',
      });
      if (result.status === 200) {
        return result.data as WeatherInfo;
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
```
到这一步，我们还需要将异常进行业务处理，比如有多个位置抛出 WeatherEmptyDataError 时，我们需要统一的格式返回。

错误处理器可以完成这个功能，我们需要创建一个 src/filter/weather.filter.ts 文件，内容如下：
```ts
//src/filter/weather.filter.ts
import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { WeatherEmptyDataError } from '../error/weather.error';

@Catch(WeatherEmptyDataError)
export class WeatherErrorFilter {
  async catch(err: WeatherEmptyDataError, ctx: Context) {
    ctx.logger.error(err);
    return '<html><body><h1>weather data is empty</h1></body></html>';
  }
}
```
然后应用到当前的框架中。
```ts
import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import { WeatherErrorFilter } from './filter/weather.filter';
// ...

@Configuration({
  // ...
})
export class MainConfiguration {
  @App()
  app: koa.Application;

  async onReady() {
    // ...

    // add filter
    this.app.useFilter([WeatherErrorFilter]);
  }
}
```