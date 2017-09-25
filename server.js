const express = require('express');
const path = require('path');
const app = express();
var proxy = require('proxy-middleware');
var url = require('url');

// Server routes...
// app.get('/hello', (req, res) => res.send({ hi: 'there' }));
console.log('hello from server.js in react, this is the process env level', process.env);

if (process.env.NODE_ENV !== 'production') {
  //console.log('development');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  // app.use(webpackMiddleware(webpack(webpackConfig)));
  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    publicPath: '/assets/'
  }));

  app.use('/assets', proxy(url.parse('http://localhost/assets')));

  app.use('*', function (req, res, next) {

    var filename = path.join(compiler.outputPath,'../index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      //console.log(err, result, filename, compiler.outputPath);
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  //console.log('production');
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 80, () => console.log('Listening'));
