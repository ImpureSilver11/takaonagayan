var webpack = require('webpack')
const { environment } = require('@rails/webpacker')

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    jquery: 'jquery/dist/jquery',
    Popper: 'popper.js/dist/popper'
  })
)

module.exports = environment
