const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    
    entry: './project/index.js',
    output: {
        
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js', // js
        publicPath:'build/' // static files was being produced by specific loaders
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test:/\.js$/
            },
            {
                use: [
                    {loader:MiniCssExtractPlugin.loader},
                    'css-loader'
                ],
                test:/\.(s)?css$/
            }
        ]

    },
    plugins: [
        new MiniCssExtractPlugin('style.css')
    ]

}