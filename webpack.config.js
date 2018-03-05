const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.sss$/,
                use: ExtractTextPlugin.extract(['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader']),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ],
};