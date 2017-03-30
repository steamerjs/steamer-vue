var PostcssImport = require('postcss-import'),
	Autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
    	PostcssImport(),
    	Autoprefixer({
            browsers: ['iOS 7', '> 0.1%', 'android 2.1']
        })
  	]
};