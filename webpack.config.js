const path=require('path');
const webpack = require('webpack'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
  entry:['babel-polyfill','./src/js/index.js'],
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin('dist')
  ]
}