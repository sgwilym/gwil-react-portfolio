var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: "web",
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "http://gwil.co/build/"
  },
  plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}
