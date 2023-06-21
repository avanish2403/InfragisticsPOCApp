const path = require('path');
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
    mode: "production",
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.prod.js'
    },
    devtool: 'source-map',
};

module.exports = merge(commonConfig, prodConfig);