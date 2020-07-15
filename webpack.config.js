const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');


const config = {
  mode:'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './main.bundle.js'
  },
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          filename:'./index.html'
      })
  ]
};

module.exports = config;