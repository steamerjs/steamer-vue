const path = require('path'),
    merge = require('lodash.merge');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {

    let configWebpack = config.webpack;

    let includePaths = [
        path.resolve('node_modules'),
        path.resolve(config.webpack.path.src)
    ];

    // 样式loader
    const commonLoaders = [
        {
            loader: 'cache-loader',
            options: {
                // provide a cache directory where cache items should be stored
                cacheDirectory: path.resolve('.cache')
            }
        },
        {
            loader: 'css-loader',
            options: {
                localIdentName: '[name]-[local]-[hash:base64:5]',
                module: config.webpack.cssModule,
                autoprefixer: true,
                minimize: true
            }
        },
        {
            loader: 'postcss-loader'
        }
    ];

    const styleRules = {
        css: {
            test: /\.css$/,
            // 单独抽出样式文件
            loader: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: commonLoaders
            }),
            include: includePaths
        },
        less: {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: merge([], commonLoaders).concat([{
                    loader: 'less-loader',
                }])
            }),
            include: includePaths
        },
        stylus: {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: merge([], commonLoaders).concat([{
                    loader: 'stylus-loader',
                }])
            }),
            include: includePaths
        },
        sass: {
            test: /\.s(a|c)ss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: merge([], commonLoaders).concat([{
                    loader: 'sass-loader',
                }])
            }),
            include: includePaths
        },
    };

    // vue-loader的样式loader配置
    let vueLoader = {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {}
        },
        exclude: /node_modules/
    };

    let vueStyleLoaderMap = {
        css: ExtractTextPlugin.extract({
            use: commonLoaders,
            fallback: 'vue-style-loader'
        }),
        less: ExtractTextPlugin.extract({
            use: merge([], commonLoaders).concat([{
                loader: 'less-loader',
            }]),
            fallback: 'vue-style-loader'
        }),
        sass: ExtractTextPlugin.extract({
            use: merge([], commonLoaders).concat([{
                loader: 'sass-loader',
            }]),
            fallback: 'vue-style-loader'
        }),
        scss: ExtractTextPlugin.extract({
            use: merge([], commonLoaders).concat([{
                loader: 'sass-loader',
            }]),
            fallback: 'vue-style-loader'
        }),
        stylus: ExtractTextPlugin.extract({
            use: merge([], commonLoaders).concat([{
                loader: 'stylus-loader',
            }]),
            fallback: 'vue-style-loader'
        }),
        styl: ExtractTextPlugin.extract({
            use: merge([], commonLoaders).concat([{
                loader: 'stylus-loader',
            }]),
            fallback: 'vue-style-loader'
        }),
    };

    let rules = [];

    configWebpack.style.forEach((style) => {
        vueLoader.options.loaders[style] = vueStyleLoaderMap[style];
        style = (style === 'scss') ? 'sass' : style;
        let rule = styleRules[style] || '';
        rule && rules.push(rule);
    });

    rules.push(vueLoader);

    return rules;
};
