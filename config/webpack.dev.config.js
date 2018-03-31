const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "../src/bin/www.ts"),
    output: {
        path: path.resolve(__dirname, "../dist/build"), // string
        filename: 'bundle.js',
        libraryTarget: "commonjs"
    },
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modules: [
            `${__dirname}/../node_modules`,
            'node_modules'
        ]
    },
    module: {
        rules: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
            }]
        }]
    },
    // devServer: {
    //     index: path.resolve(__dirname, "../dist/build/bundle.js"),
    //     open: true,
    //     compress: true,
    //     lazy: false,
    //     hot: true,
    //     host: "0.0.0.0",
    //     port: 9000
    // },
    // 是否启动监听
    watch: true, // boolean

    // 在第一个错误出错时抛出，而不是无视错误。
    bail: true, //boolean

    // 禁用/启用缓存
    cache: false // boolean
}