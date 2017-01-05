* 创建项目: 01_webpack-vue
    |- entry.js
    |- index.html
    |- webpack.config.js
    |- package.json
        {
          "name": "webpack-vue",
          "version": "1.0.0",
        }
* 下载vue1.x的版本
    * npm install vue@1 --save
* 配置webpack: webpack.config.js
    module.exports = {
        entry: "./entry.js",
        output: {
            path: __dirname,
            filename: "bundle.js"
        },
        module: {
            loaders: [
            ]
        }
    };
* entry.js: 引入并使用vue模块
    var Vue = require('vue');
    new Vue({
        el : '#app',
        data : {
            msg : 'atguigu.com'
        }
    })
*  index.html: 使用vue的表达式显示数据, 引入bundle.js
    <div id="app">
        <p>{{msg}}</p>
    </div>
    <script type="text/javascript" src="bundle.js"></script>
* 编译打包, 并访问测试:
    webpack