const path = require("path");

module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),

    module: {

        rules: [

          {

            test: /\.(js)$/,

            exclude: /node_modules/,

            use: ['babel-loader']

          }

        ]

    },

    output: {

        path: path.resolve(__dirname, "./dist", "./assets"),

        filename: "bundle.js"

    },

    devServer: {

        static: path.resolve(__dirname, './dist'),

    },

    devtool: 'hidden-source-map'

};