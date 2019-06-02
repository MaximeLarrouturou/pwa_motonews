const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
    console.info(`${percent}%`, msg, argsOrDefault);
  };

module.exports = {
    entry: 
        './js/index.js',
        
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new webpack.ProgressPlugin(handler),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Moto News',
            template: './src/index.html'
        })
    ]
};