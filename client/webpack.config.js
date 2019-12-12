const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/js/main.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};