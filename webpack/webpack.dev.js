const path = require('path');
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.dev.js'
    },
    devtool: 'eval-source-map',
};

module.exports = merge(commonConfig, devConfig);