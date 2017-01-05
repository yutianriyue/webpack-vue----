module.exports = {
    //入口
    entry: "./src/js/entry.js",
    //打包输出
    output: {
        publicPath : './dist/',
        path: './dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" } ,
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }  //如果图片小于limit就会进行Base64编码
        ]
    }
};
