const webpack = require('webpack')
const path = require('path')

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [new webpack.HotModuleReplacementPlugin()] : []


module.exports = {
    context: __dirname,
    mode: debug ? 'development' : 'production',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.sss$/,
                loader: ['style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]!postcss-loader']
            },
        ],
    },
    devtool: debug ? 'source-map' : 'none',
    devServer: {
        port: 3000,
        hot: debug,
        open: true,
        contentBase: path.resolve(__dirname, 'public'),
    },
    plugins: plugins,
}
