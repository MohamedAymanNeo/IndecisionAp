const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/, //any file which end with .js
            exclude: /node_modules/, //where to get those files
        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]}
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}