const path = require('path');
const webpack = require('webpack');
const ExtractWebPlugin = require('extract-text-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const { removeEmpty } = require('webpack-config-utils');

 // const ENVIRONMENT = process.env.NODE_ENV;
module.exports = () => {
  // console.log(env)
  const config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js','webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader','babel-loader'
        ],
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
     extensions: [ '.js', '.jsx']
  },
  plugins:removeEmpty ([ 
     new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new ExtractWebPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin() 
  ])
};
return config;
};




