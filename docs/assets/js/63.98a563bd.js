(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{322:function(e,t,a){"use strict";a.r(t);var s=a(38),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_3-2-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-初始化项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 3_2 初始化项目")]),e._v(" "),a("p",[e._v("本节我们将在终端，基于Linux命令，初始化我们的项目，从0搭建一个最简单的网站。")]),e._v(" "),a("h2",{attrs:{id:"创建目录及文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录及文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建目录及文件")]),e._v(" "),a("ul",[a("li",[e._v("打开终端，默认进入的是用户所在的根目录；")]),e._v(" "),a("li",[e._v("创建项目目录：mkdir staticServer；")]),e._v(" "),a("li",[e._v("进入项目目录：cd staticServer；")]),e._v(" "),a("li",[e._v("初始化node项目：npm init -f 直接按默认配置生成package.json文件；")]),e._v(" "),a("li",[e._v("安装依赖：npm install koa ( package.json 文件 多了一个dependencies的配置项，里面包含了koa这个名称和所用的版本)；")]),e._v(" "),a("li",[e._v("创建服务器入口文件：touch index.js；")]),e._v(" "),a("li",[e._v("编辑文件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vi index.js // 使用终端的vi编辑器，也可以直接使用vscode等界面编辑器。\n")])])]),a("p",[e._v("在英文输入法下按一下 i 键即进入编辑模式，输入如下内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const Koa = require('koa');  // 引入koa框架\nconst app = new Koa();\n// ctx 为Koa 提供的 Context 对象，表示一次对话的上下文(包括 HTTP 请求和 HTTP 回复)，通过操作ctx，就可以控制返回给用户的内容。\napp.use(ctx => {\n  // 该属性就是发送给用户的内容。\n  ctx.response.body = '写代码很快乐！';\n});\n\napp.listen(8888);\nconsole.log('恭喜你，服务器启动成功：复制 http://localhost:8888/ 到浏览器即可访问');\n")])])]),a("p",[e._v("输完后，按esc进入指令模式，然后按 shift + : 两个键进入命令行模式，输入 wq 保存退出。")]),e._v(" "),a("ul",[a("li",[e._v('添加启动脚本： 在package.json 文件中的scripts 部分加入 "start": "node index", 如下所示：')])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "name": "staticServerByKoa",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "koa": "^2.6.2"\n  }\n}\n')])])]),a("ul",[a("li",[e._v("启动项目，在项目根目录下输入：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm start\n")])])]),a("p",[e._v("把终端中的 http://localhost:8888/ 复制到浏览器即可看到网页显示：写代码很快乐，至此，一个简单的入门例子就实现了。")]),e._v(" "),a("h2",{attrs:{id:"升级入门例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级入门例子","aria-hidden":"true"}},[e._v("#")]),e._v(" 升级入门例子")]),e._v(" "),a("p",[e._v("在上一节我们需要手动开启浏览器，并且更改文件后还需要手动重启服务器，同时页面太丑伤不起，所以本节进行优化：")]),e._v(" "),a("h4",{attrs:{id:"自动开启浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动开启浏览器","aria-hidden":"true"}},[e._v("#")]),e._v(" 自动开启浏览器")]),e._v(" "),a("ul",[a("li",[e._v("将 index.js文件改为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const Koa = require('koa');  // 引入koa框架\nconst cp = require('child_process'); // 用来创建子进程\nconst app = new Koa();\n// ctx 为Koa 提供的 Context 对象，表示一次对话的上下文(包括 HTTP 请求和 HTTP 回复)，通过操作ctx，就可以控制返回给用户的内容。\napp.use(ctx => {\n  // 该属性就是发送给用户的内容。\n  ctx.response.body = '写代码很快乐！';\n});\napp.listen(8888);\ncp.exec('open http://localhost:8888/'); // 自动打开浏览器\nconsole.log('恭喜你，服务器启动成功：复制 http://localhost:8888/ 到浏览器即可访问');\n")])])]),a("h4",{attrs:{id:"文件更新后自动重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件更新后自动重启","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件更新后自动重启")]),e._v(" "),a("ul",[a("li",[e._v("安装 nodemon：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// --save-dev 是为了让nodemon 配置到开发环境的依赖项即devDependencies中，因为生产环境不需要用它\nnpm i --save-dev nodemon // 它会监测项目中的所有文件，一旦发现文件有改动，会自动重启应用\n")])])]),a("ul",[a("li",[e._v("修改package.json 文件中scripts的start脚本为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' "start": "nodemon index",\n')])])]),a("p",[e._v("此时，我们把index.js中的“带代码很快乐”改成“不聪明的码农，写代码很苦逼”，就会重新打开浏览器并显示最新内容。")]),e._v(" "),a("ul",[a("li",[e._v("优化页面内容，将内容中间件改为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.use(ctx => {\n  // 该属性就是发送给用户的内容。\n  ctx.response.type = 'html';\n  ctx.response.body = '<h1 style=\"color: red;height: 60px; background-color: black;\">导航栏</h1>';\n});\n")])])]),a("p",[e._v("此时就可以返回 最常见的html内容了，但是写起来很不便，需要再次优化。")]),e._v(" "),a("ul",[a("li",[e._v("再次优化，将内容中间件改为：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.use(ctx => {\n  // 该属性就是发送给用户的内容。\n  ctx.response.type = 'html';\n  ctx.response.body = fs.createReadStream('index.html');\n});\n")])])]),a("p",[e._v("不出意外，会报错，因为我们没有引入fs, 在前面加入：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const fs = require('fs');\n")])])]),a("p",[e._v("此时，虽然不报错，但 页面显示 Not Found，因为我们没有 创建index.html，\n创建 index.html，并输入以下内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>学习koa</title>\n  </head>\n  <body>\n    <h1>学习真快乐！</h1>\n  </body>\n</html>\n')])])]),a("p",[e._v("此时，每改动一次html文件，在浏览器刷新即可看到最新内容，并且添加内容和样式就方便很多了。")]),e._v(" "),a("p",[e._v("自此，一个正常网站就可以显示了，开发起来也比较方便，但是，在html中引入外部样式表和展示图片都有有问题，我们将在下一节解决！")])])},[],!1,null,null,null);t.default=n.exports}}]);