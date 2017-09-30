const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const app = express();
const port =  3000;
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/static'));

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname,'static', 'index.html'))
// })
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler)); 
 
const server = app.listen(port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  console.log(process.env)
});