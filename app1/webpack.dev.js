const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: [
    'webpack-dev-server/client',
    path.resolve(root, 'src/main.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'template.html')
    })
  ],
  // loaders
  module: {
    rules: [
      {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
    ]
  },
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
}