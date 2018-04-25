1.creact-react-app创建react项目
2.npm run eject 弹出，进行自定义配置
3.添加组件
babel-plugin-import   按需加载组建
antd-mobile           蚂蚁金服UI组建
cookie-parser         cookie组建
redux                 数据管理
redux-thunk
reeact-redux
react-router          路由管理

在package.json中配置
"plugins": [
      "transform-decorators-legacy",
      [
        "import",
        {
          "libraryName":"antd-mobile",
          "style":"css"
        }
      ]
    ],

在package.json中配置，解决跨域问题，服务器9093
"proxy":"http://localhost:9093"


4.服务器启动
nodemode server
5.启动react
npm start
6.mongo数据库启动
net start mongodb
mongo
