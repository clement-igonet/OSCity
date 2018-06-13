var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'OpenEarthView';

var plugins = [],
    outputFile;

// if (env === 'build') {
//     plugins.push(new UglifyJsPlugin({
//         minimize: true
//     }));
//     outputFile = libraryName + '.min.js';
// } else {
    outputFile = libraryName + '.js';
// }

var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'var',
        umdNamedDefine: true
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "THREE": "THREE"
    },
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /(\.jsx|\.js)$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: plugins
};

module.exports = config;
