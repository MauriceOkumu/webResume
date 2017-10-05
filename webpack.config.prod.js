const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.dev.js')();
// require('dotenv').config();

module.exports = merge(common, {
	devtool: 'cheap-module-source-map',
	plugins: [
	new webpack.optimize.UglifyJsPlugin({
		compress: {
          screw_ie8: true,
          warnings: false
        },
		sourceMap: true
	}),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
	]
});