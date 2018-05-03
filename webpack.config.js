var webpack = require('webpack');
var path = require('path');

console.log(path.join(__dirname, './dist'));


module.exports = {
  entry: './src/module.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'module.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'webpack-strip-log-loader'
    }]
  }
};
