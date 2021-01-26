const webpack         = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin    = require('terser-webpack-plugin')

const opts  = require('./options')
const babel = require('./loaders/babel')
const css   = require('./loaders/css')
const raw   = require('./loaders/raw')
const vue   = require('./loaders/vue')

const config = {
  module: {
    rules: [
      babel,
      css,
      raw,
      vue
    ]
  },

  resolve: {
    modules: [
      opts.paths.src,
      'node_modules'
    ],
    extensions: ['.js', '.vue']
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: opts.banner,
      entryOnly: true
    })
  ]
}

module.exports = config
