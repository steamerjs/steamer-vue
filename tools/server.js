var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require('http-proxy-middleware');

var webpackConfig = require("./webpack.base.js"),
	config = require("../config/project"),
	configWebpack = config.webpack,
	port = configWebpack.port,
	route = Array.isArray(configWebpack.route) ? configWebpack.route : [configWebpack.route];

for (var key in webpackConfig.entry) {
    webpackConfig.entry[key].unshift('webpack-hot-middleware/client?reload=true&dynamicPublicPath=true&path=__webpack_hmr')
}

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    hot: true,
	historyApiFallback: true,
	noInfo: true,
	stats: {
		colors: true
	},
}));

app.use(webpackHotMiddleware(compiler, {
    // 这里和上面的client配合，可以修正 webpack_hmr 的路径为项目路径的子路径，而不是直接成为 host 子路径（从publicPath开始，而不是根开始）
    // https://github.com/glenjamin/webpack-hot-middleware/issues/24
    // path: webpackConfig.output.publicPath + '__webpack_hmr'
}))

// 转发
route.forEach((rt) => {
	app.use(rt, proxy({target: `http://127.0.0.1:${port}`, pathRewrite: {[`^${rt}`] : '/'}}));
});

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
