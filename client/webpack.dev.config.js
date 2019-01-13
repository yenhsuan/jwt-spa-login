const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const config = merge.smartStrategy({ plugins: 'append' })(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    contentBase: path.join(__dirname, './dist'),
    overlay: {
      errors: true,
    },
    publicPath: '/',
    historyApiFallback: true,
    quiet: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new FriendlyErrorsWebpackPlugin({ clearConsole: false }),
  ],
});

module.exports = config;
