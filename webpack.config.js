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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
    ],
  },
};