const config = require('./webpack.config.js'),
      merge  = require("webpack-merge");

module.exports = merge(config, {

    entry: {
        "app": "./main.jit.ts",
    },

    modules: {

        rules: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader?keepUrl=true"],
                exclude: [/\.(spec|e2e)\.ts$/]
            }
        ]
    }
});