const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: '../server/static',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /.node$/,
        loader: 'node-loader'
      },
      {
        test: [/.css?$/],
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
      }
    })
  ]
};
