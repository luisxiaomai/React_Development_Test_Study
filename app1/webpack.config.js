const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: path.resolve(root, 'src/main.js'),
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'React Demo',
            template: path.resolve(root, 'template.html')
        })],
    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.css$/, // Only .css files
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]' // Run both loaders
            }
        ]
    }
}