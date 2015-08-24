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
  postcss: [
    require('autoprefixer-core')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
