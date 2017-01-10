var path = require('path');
var glob = require('glob');
module.exports = {
    curpage: "all",
    htmlEntries: getEntry("./src/pages/**/*.html"),
    jsEntries: getEntry("./src/pages/**/*.js")
}
function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;
    glob.sync(globPath).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-2);
        pathname = tmp[0]; // 正确输出js和html的路径
        entries[pathname] = entry;
    });
    return entries;
}
