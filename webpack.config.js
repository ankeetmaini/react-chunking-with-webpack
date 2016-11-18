const HtmlWebpackPlugin = require('html-webpack-plugin');
const dependencies = require('./package.json').dependencies;
const exec = require('child_process').exec;
const webpack = require('webpack');

// clean the `dist` folder
exec('rm -rf dist/*');

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
    })
  ]
}