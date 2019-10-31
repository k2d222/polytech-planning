const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './www/.js/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.bundle.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "../../jquery.js",
      jQuery: "../../jquery.js"
    })
  ]
};
