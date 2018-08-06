const path = require('path')

const config = {
  output: {
    path: path.resolve(__dirname, './webpack-dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: []
    // rules: [{
    //   test: /\.js$/,
    //   loader: 'babel-loader',
    //   exclude: /node_modules/
    // }],
  }
}
module.exports = config
