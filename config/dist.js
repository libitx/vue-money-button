process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const webpack = require('webpack')
const mergeOptions = require('merge-options')

const opts = require('./options')
const base = require('./webpack.config.js')

const config = mergeOptions(base, {
  entry: opts.paths.src,

  output: {
    filename: 'vue-money-button.js',
    path: opts.paths.output.dist,
    library: 'MoneyButton',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
})

module.exports = config