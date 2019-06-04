const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const handler = (percentage, message, ...args) => {
    const percent = (percentage * 100).toFixed(2);
    const msg = message.toUpperCase();
    const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
    console.info(`${percent}%`, msg, argsOrDefault);
  };


module.exports = {
    entry: {
        index: './src/js/index.js',
        motos: './src/js/motos.js',
        sbk: './src/js/sbk.js',
        add_moto: './src/js/add_moto.js',
        add_sbk: './src/js/add_sbk.js',
        //pushServer: './src/js/pushServer.js',
        //sw: './src/sw.js',
    },
  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './pages/[name].[ext]'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            },
         ],
    },

    plugins:[
        new webpack.ProgressPlugin(handler),
        //new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Moto News',
            template: './src/index.html'  
        }),
        
    ],
    //optimization: {
    //    splitChunks: {
    //        cacheGroups: {
    //           node_vendors: {
    //               test: /[\\/]node_modules[\\/]/,
    //               chunks: "all",
    //               priority: 1,
    //           } 
    //        }
    //    }
    //}
    
}