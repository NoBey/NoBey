var path = require('path');
var webpack = require("webpack")
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/app.js');
var BUILD_PATH = path.resolve(ROOT_PATH, './');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
      // filename: 'style.css'
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'This is the world of NoBey'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: APP_PATH,
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.html$/,
      loader: 'html',
      query: {
        minimize: true
      }
    },
    {
      test: /\.png$/,
      loader: "url-loader",
      query: { mimetype: "image/png" }
  }]

  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3333
  }
};
