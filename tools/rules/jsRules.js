
module.exports = function(config) {

    let configWebpack = config.webpack;

    // js方言
    const jsRules = {
        ts: {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: './.cache/'
                    }
                },
                {
                    loader: 'ts-loader',
                    options: {
                        appendTsxSuffixTo: [/\.vue$/]
                    }
                }
            ],
            exclude: /node_modules/,
        },
    };

    let rules = [
        {
            test: /\.js$/,
            loader: 'happypack/loader?id=1',
            exclude: /node_modules/
        }
    ];

    configWebpack.js.forEach((tpl) => {
        let rule = jsRules[tpl] || '';
        rule && rules.push(rule);
    });

    return rules;
};
