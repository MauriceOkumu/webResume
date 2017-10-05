var webpackConfig = null;

if (process.env.NODE_ENV !=='production') {
   process.env.NODE_ENV = 'development';
   webpackConfig = require('./webpack.config.dev.js')(); 
  }else{
    webpackConfig = require('./webpack.config.prod.js');
  }

 module.exports = { webpackConfig: webpackConfig};