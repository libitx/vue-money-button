process.env.NODE_ENV = process.env.NODE_ENV || 'testing'

const webpack = require('webpack')
const mergeOptions   = require('merge-options')

const opts = require('./options')
const base = require('./webpack.config.js')

const config = mergeOptions(base, {
  entry: opts.paths.src,

  output: {
    filename: '[name].js',
    path: opts.paths.output.dist
  },

  mode: 'development'
})

module.exports = config