const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dependencies = require('./package.json').dependencies;
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/app.js',
    vendor: Object.keys(dependencies)
  },
  output: {
    path: './dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new HtmlWebpackPlugin({
      title: 'React Webpack Code Splitting',
      templateContent: '<html><head></head><body><div id="app"></div></body></html>'
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'source-map'
}