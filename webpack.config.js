const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        "SelectorTab": './src/index.js',
        "SelectorTab.min": './src/index.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        }
        ]
    },
    mode: 'none',
    output: {
        filename: '[name].js',
        library: 'SelectorTab',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }

}

