const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './www/.ts/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
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
