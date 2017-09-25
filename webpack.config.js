var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// //console.log('process env', process.env);

const VENDOR_LIBS = [
  "react-router-dom"
];

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[name].[chunkhash].js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        }),
        test: /\.less$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader'
          },
          'image-webpack-loader'
        ]
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, '../install/node_modules')]
  },
  resolveLoader: {
    modules: ['/install/node_modules'],
  },

  // resolveLoader: {
  //   modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules"],
  //   extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"],
  //   packageMains: ["webpackLoader", "webLoader", "loader", "main"]
  // },

  // resolve: {
  //   extensions: ['', '.js', '.jsx'],
  //   root: [
  //     path.join(__dirname, '../install/node_modules')
  //   ]
  // },
  // resolveLoader: {
  //   modulesDirectories: [
  //     '../install/node_modules'
  //   ]
  // },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VIRTUAL_HOST': JSON.stringify(process.env.VIRTUAL_HOST)
    }),
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    })
  ]
};
