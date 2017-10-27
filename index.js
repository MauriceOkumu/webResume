const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.js').webpackConfig;
const db = require('./backend/database');
 db.connect();
// //connection.conect()

 db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) {
    throw err;
  }
  console.log('The solution is : =>', rows[0].solution);
 });
 db.end()
// console.log('The database is connected', db)
const app = express();
const port =  3000;
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/static'));
app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));


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
});
   console.log('Environment var ',process.env.NODE_ENV)