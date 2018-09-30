process.env.NODE_ENV = process.env.NODE_ENV || 'testing'

const webpack = require('webpack')
const merge   = require('deep-assign')

const opts = require('./options')
const base = require('./webpack.config.js')

const config = merge(base, {
  entry: opts.paths.src,

  output: {
    filename: '[name].js',
    path: opts.paths.output.dist
  },

  mode: 'development'
})

module.exports = config