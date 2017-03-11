'use strict';

var webpack = require('webpack')

var config = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
}

module.exports = config
