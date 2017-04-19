// var jQuery = require('jquery');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './bundle.js'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'source-map': null
    //     externals: {
    //     jquery: "jQuery"
    // }
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery"
    //     })
    // ]
}