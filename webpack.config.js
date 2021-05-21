const { resolve } = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
//const { ContextReplacementPlugin } = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");




module.exports = {
    entry: resolve (__dirname, 'src', 'main.js'),
    output: {
        path: resolve (__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    mode: "production",
    
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'
            } 
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new BundleAnalyzerPlugin(),

        //new ContextReplacementPlugin(/luxon[/\\]DataTime$/, /DATA_MED/),

        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|sass|css|html|svg)$/,
            compressionOptions: {
                params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                },
            },
            threshold: 10240,
            minRatio: 0.8,
        }),
        
    ],

    
}