const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    
    entry:{
        bundle: './src/index.js',
        vendor: ['react', 'react-dom']},
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].[chunkhash].js'// adding hash to static file's name to prevent caching data on client browser
    },

    module: {
        rules: [{
            use: 'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/
        }]
    },
    optimization: {//way to split user logic js and dependencies js by different files
        splitChunks: {
          cacheGroups: {
            commons: {
              test: 'vendor',
              name: 'vendor',
              chunks: 'all'
            }
          }
        }
      },
    plugins: [//plugin inserting links on static files with hashed names in index.html and cloning it into output dir
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new CleanWebpackPlugin('build/*.*')//clearing previous build artifacts before each new build
    ]
}