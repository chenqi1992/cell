
npm install

cnpm install

npm run serve (启动项目)
npm run dev (启动项目)

npm run build:prod (构建生产)

```

# 说明

>  开发环境 macOS/Windows  Chrome  nodejs 8.9以上


# 项目布局
$ treer -e ./result.txt -i .git
```
.
C:\Users\chen\Desktop\beiming\weijiefen
├─.gitignore
├─babel.config.js
├─npm-debug.log
├─package-lock.json
├─package.json
├─README.md
├─vue.config
├─src
|  ├─App.vue            入口
|  ├─main.js    
|  ├─views              页面pages
|  |   ├─tools
|  |   |   └Interest.vue
|  ├─utils              函数工具库
|  |   ├─chengxw.js
|  |   ├─constants.js
|  |   ├─store.js
|  |   └utils.js
|  ├─server             axios请求处理
|  |   └httpServer.js
|  ├─router             路由
|  |   ├─index.js
|  |   └userManagement.js
|  ├─config             接口域名配置
|  |   ├─config.js
|  |   └robot.js
|  ├─components         公共组件
|  |     ├─header.vue
|  |     ├─leftMenu.vue
|  |     ├─date
|  ├─common
|  |   ├─scss          公共css
|  |   |  └commonsize.scss
|  |   ├─js
|  |   ├─fonts
|  ├─assets           图片
|  |   ├─logo.png
|  |   ├─tools
|  |   |   ├─1.png
|  |   |   ├─2.png
|  |   |   ├─3.png
|  |   |   └4.png
|  ├─api                接口
|  |  ├─api.js
|  |  ├─classroom.js
|  |  └reConfig.js
├─public                公共静态文件（webpack不处理此文件夹）
|   ├─flexible.js
|   ├─index.html
|   └reset.css
├─dist                  打包后生产文件
|  ├─favicon.ico
|  ├─index.html
|  ├─assets
|  |   ├─js
|  |   | ├─app.eb6737e6.js
|  |   | └chunk-vendors.df5f2e07.js
|  |   ├─img
|  |   |  └logo.82b9c7a5.png
|  |   ├─css
|  |   |  └app.7542f025.css

# commit规范

build： 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：    主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：  文档更新
feat：  新增功能
fix：   bug 修复
perf：  性能优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style： 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test：  新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore： 不属于以上类型的其他类型