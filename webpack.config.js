"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'react-rx.js'),
  devServer: {
    inline: true,
    port: 3000,
    contentBase: "public",
    historyApiFallback: {
      index: '/index.html'
    }
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    publicPath: "/js/",
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel-cache',
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      }
    }]
  },
  plugins: debug ? [] : [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true
  }),
  ]
};

// module.exports = {
// 	entry: './src/app.js',
// 	output: {
// 		path: './dist',
// 		filename:'app.bundle.js'
// 	},
// 	module: {
// 		loaders: [{
// 			exclude: '/node_modules/',
// 			loader: 'babel-loader',
// 			query: {
// 				presets: ['es2015']
// 			}
// 		}]
// 	}
// }
