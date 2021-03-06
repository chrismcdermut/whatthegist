import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = new WebpackConfig().merge({
    node        : {
        fs : 'empty',
        net: 'empty',
        tls: 'empty'
    },
    output      : {
        path    : path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    context     : path.join(__dirname, '/app'),
    module      : {
        preLoaders: [
            {
                test   : /\.js$/,
                loader : 'eslint-loader',
                exclude: /(node_modules)/
            }
        ],
        loaders   : [{
            test  : /\.scss$/,
            loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
        }, {
            test  : /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=300'
        }, {
            test  : /\.json$/,
            loader: 'json-loader'
        }, {
            test  : /\.html$/,
            loader: 'ng-cache?prefix=[dir]/[dir]'
        }, {
            test   : /\.js$/,
            loader : 'babel?presets[]=es2015',
            exclude: /node_modules/
        }]
    },
    devServer   : {
        compress          : true,
        host              : 'localhost',
        port              : 9000,
        contentBase       : path.join(__dirname, './assets'),
        overlay           : true,
        // TODO: allow for proxy to mock certain routes
        proxy             : {
            '/watson': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        /**
         * If the server returns a 404 or error fallback to index.html.  This is needed to serve
         * angular app
         */
        historyApiFallback: true
    },
    /**
     * Ignore node_modules to improve performance
     */
    watchOptions: {
        ignored: /node_modules/
    },
    plugins     : [
        new CleanWebpackPlugin(['dist'], {
            root   : __dirname,
            verbose: true,
            dry    : false
        }),
        new HtmlWebpackPlugin({
            title   : 'Starter Theme',
            template: 'index.ejs',
            inject  : 'body'
        }),
        new CopyWebpackPlugin([
            {from: 'service-worker.js', to: 'service-worker.js'},
        ])
    ]
})