const path = require('path');
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");

const stagingConfig = {
    mode: "production",
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.staging.js'
    },
    devtool: 'source-map',
};

module.exports = merge(commonConfig, stagingConfig);