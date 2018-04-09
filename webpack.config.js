const path = require('path');

module.exports = {
  context: path.join(__dirname, 'main'),
  entry: [
    './Main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loaders: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(s*)css$/, loader: ['style-loader', 'css-loader', 'sass-loader']}
    ],
  },
};