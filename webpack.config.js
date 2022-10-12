let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                excludes: /node_modules/,
                use: ['babel-loader'],
            },
            
        ]
    }
}