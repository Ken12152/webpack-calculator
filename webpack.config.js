const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public/js')
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },
}