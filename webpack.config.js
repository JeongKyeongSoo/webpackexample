const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: {
        about: "./src/about.js",
        index: "./src/index.js", // string | object | array
    },
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output: {
      // options related to how webpack emits results
      path: path.resolve(__dirname, "public"), // string
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      filename: "[name]_bundle.js", // string
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './about.html',
            filename: './about.html',
            chunks: ['about'],
        })
    ]
}