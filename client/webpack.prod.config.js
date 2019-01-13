const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge.smartStrategy()(baseConfig, {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions:{
          output: {
            comments: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});

module.exports = config;
