var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware")
var proxy = require('proxy-middleware');

var webpackConfig = require("./webpack.dev.js"),
	config = require("../config/project");
var port = config.port;

for (var key in webpackConfig.entry) {
    webpackConfig.entry[key].unshift('webpack-hot-middleware/client?reload=true&dynamicPublicPath=true&path=__webpack_hmr')
}

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	},
}));

app.use(webpackHotMiddleware(compiler, {
    // 这里和上面的client配合，可以修正 webpack_hmr 的路径为项目路径的子路径，而不是直接成为 host 子路径（从publicPath开始，而不是根开始）
    // https://github.com/glenjamin/webpack-hot-middleware/issues/24
    path: webpackConfig.output.publicPath + '__webpack_hmr'
}))

// 前端转发
app.use(config.route, proxy('http://localhost:' + port));
// 后台转发
app.use('/api/', proxy('http://localhost:3001'));

app.listen(port, function(err) {
	if (err) {
		console.error(err);
	}
	else {
		console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
