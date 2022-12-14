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
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|jpg|jpe?g|gif|svg)$/,
                use: {
                    loader: "url-loader?limit=100000"
                }
            }, 
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                use: { loader: "url-loader?limit=10000&mimetype=application/font-woff" }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    },
    mode: "development",
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    devtool: "source-map", // https://survivejs.com/webpack/building/source-maps/#inline-source-map-types
    devServer: {
        historyApiFallback: true, // https://jaxenter.com/build-reactjs-history-api-fallback-153122.html
        contentBase: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "app/index.html"
        })
    ]
}