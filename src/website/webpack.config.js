const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const merge = require('webpack-merge');
const stylus_plugin = require('nib');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    // Configuration in common to both client-side and server-side bundles
    const sharedConfig = () => ({
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        output: {
            filename: '[name].js',
            publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {

            rules: [
                { test: /\.ts|\.tsx$/, enforce: "pre", loaders: ["babel-loader", "ts-loader"] },
                { test: /\.ts|\.tsx$/, enforce: 'pre', loader: 'tslint-loader', options: { emitErrors: false, failOnHint: true, } },
                //{ test: /\.tsx?$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true'] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [new CheckerPlugin()]
    });

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist';
    const cssLoaderSuffix = isDevBuild ? '' : '?minimize';
    const cssLoader = `css-loader${cssLoaderSuffix}`;

    const clientBundleConfig = merge(sharedConfig(), {
        entry: { 'main-client': './ClientApp/boot-client.tsx' },
        module: {
            rules: [
                { test: /\.(css|scss)$/, use: ExtractTextPlugin.extract({ use: [cssLoader, 'sass-loader'] }) },
                { test: /\.(styl)$/, use: ['style-loader', cssLoader, { loader: 'stylus-loader', options: { use: [stylus_plugin()] } }] },
                { test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader' },
                { test: /\.(ico)$/, loader: 'file-loader?name=[name].[ext]' },
            ]
        },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new ExtractTextPlugin('site.css'),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ])
    });

    // Configuration for server-side (prerendering) bundle suitable for running in Node
    const serverBundleConfig = merge(sharedConfig(), {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './ClientApp/boot-server.tsx' },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./ClientApp/dist/vendor-manifest.json'),
                sourceType: 'commonjs2',
                name: './vendor'
            }),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, "./ClientApp/css/siteNonSPA.min.css"),
                    to: path.join(__dirname, "./wwwroot/dist"),
                },
            ]),
        ],
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './ClientApp/dist')
        },
        target: 'node',
        devtool: 'inline-source-map'
    });

    return [clientBundleConfig, serverBundleConfig];
};
