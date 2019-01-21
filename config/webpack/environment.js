var webpack = require('webpack')
const { environment } = require('@rails/webpacker')

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: "jquery",
    jquery: "jquery",
    Popper: 'popper.js/dist/popper'
  })
)
// jQuery: "jquery",


module.exports = environment
