const webpack = require('webpack')
const merge   = require('deep-assign')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const opts    = require('./options')
const base    = require('./webpack.config.js')

const config = merge(base, {
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

if (process.env.NODE_ENV === 'development') {
  config.devtool = '#eval-source-map';
}

module.exports = config
