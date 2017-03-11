'use strict';

var webpack = require('webpack')

var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    library: 'react-tabbed',
    libraryTarget: 'umd'
  }
}

module.exports = config
