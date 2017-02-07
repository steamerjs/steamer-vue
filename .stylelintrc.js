module.exports = {
    "extends": "stylelint-config-standard",
    "processors": ["stylelint-processor-html"],             // 加入对vue的支持
    "rules": {
        "color-hex-length": null,                           // 不限制长度
        "color-hex-case": null,                             // 不限制大小写
        "comment-whitespace-inside": null,                  // 不限制注释里面的空格
        "indentation": 4,
        "comment-empty-line-before":null,
        "declaration-empty-line-before": [ "always", {
            except: [
                "first-nested",
            ],
            ignore: [
                "after-declaration",
                "after-comment",
                "inside-single-line-block",
            ],
        }],
        "rule-nested-empty-line-before": null,
        // "no-missing-end-of-source-newline": null,
        // "no-eol-whitespace": null,
        "no-empty-source": null,
        "media-feature-name-no-unknown": null,
        // "max-empty-lines": null,
        "rule-non-nested-empty-line-before": null,
    }
}