const webpack = require('webpack')
const mergeOptions = require('merge-options')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const opts    = require('./options')
const base    = require('./webpack.config.js')

const config = mergeOptions(base, {
  entry: opts.paths.resolve('src/demo/index.js'),

  output: {
    filename: 'demo.js',
    path: opts.paths.output.demo
  }
})

config.plugins = config.plugins.concat([
  new HtmlWebpackPlugin({
    template: opts.paths.resolve('src/demo/index.html')
  })
])

module.exports = config
