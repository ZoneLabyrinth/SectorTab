module.exports = {
    entry: './test.js',
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
            use:[
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
    mode: 'development',
}