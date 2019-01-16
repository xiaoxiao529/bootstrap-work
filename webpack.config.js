let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack')
const path = require('path');
module.exports = {
	mode: "production",
  entry: './src/index.js',  //入口文件的配置项
  output: {  //出口文件的配置项
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js',
  },
  module: {//配置 loader  模块：例如解读CSS,图片如何转换，压缩
    rules: [//相关规则写在这里
        {
            test: /\.css$/,//正则表达式：根据后缀为 .css 的文件来匹配 css 文件
            loader:'style-loader!css-loader' //css-loader使得在js里面可以处理css文件，style-loader使得js处理完的样式插入到index.html页面中
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader?name=font/[hash].[ext]'
        }
    ]
  },
  plugins:[
  	new htmlWebpackPlugin({
  		template:'./index.html'  //模板文件
      }),
      new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        "window.jQuery": "jquery"
    })
  ],  //插件，用于生产模版和各项功能
    mode: 'development',  //打包模式，默认生产者模式,
    devServer:{
        contentBase:path.resolve(__dirname,'dist'), //基本目录结构，监听哪里的代码
        host:'localhost', //ip地址，不建议填localhost 命令行ipconfig查看ipv4的值即是ip地址
        compress:true, //服务器压缩参数，是否启用服务器压缩，一般启用
        port:80 //任何喜欢的数字
    }
};