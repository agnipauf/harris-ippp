## 介绍

KoaHub.js -- 基于 Koa.js 平台的 Node.js web 快速开发框架。可以直接在项目里使用 ES6/7（Generator Function, Class, Async & Await）等特性，借助 Babel 编译，可稳定运行在 Node.js 环境上。


```js
//base controller, admin/controller/base.controller.js
export default class extends koahub.http{

    constructor() {
        super();
        
        console.log('base constructor');
    }

    isLogin() {
        console.log('base isLogin');
    }
}

//index controller, admin/controller/index.controller.js
import base from "./base.controller";
export default class extends base{

    constructor() {
        super();
        
        console.log('index constructor');
    }

    index() {
        super.isLogin();
        super.json({msg: 'this is a msg'});
        console.log('index index');
    }
}
```

项目中可以使用 ES6/7 里的所有特性，借助 Babel 编译，可以稳定运行在 >=0.12.0 的 Node.js 环境中。

## 特性

* 支持koa全部中间件
* 支持使用 ES2015+ 全部特性来开发项目
* 支持断点调试 ES2015+ 项目
* 支持多种项目结构和多种项目环境
* 支持多级 Controller
* 支持 MySQL数据库
* ...

## 下载

```sh
git clone https://github.com/einsqing/koahubjs.git
```

## 安装依赖

```sh
cd koahubjs
npm install
```

## 开始应用

```sh
npm run compile
npm run start
```

启动信息:

```text
server running at http://127.0.0.1:3000
```

## 文档

制作中....

## 官网
[http://js.koahub.com]http://js.koahub.com