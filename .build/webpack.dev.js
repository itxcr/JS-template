const path = require('path')
const commonConfig = require('./webpack.common')
const {merge} = require('webpack-merge')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const devConfig = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [

    ]
  },
  devServer: {
    open: true,
  }
}
module.exports = merge(commonConfig, devConfig)

