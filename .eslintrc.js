module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "standard",
    // "parserOptions": {
    //     "ecmaFeatures": {
    //         "experimentalObjectRestSpread": true,
    //         "jsx": true,
    //         "modules": true,
    //         "spread" : true,
    //         "restParams" : true
    //     },
    //     "sourceType": "module"
    // },
    "plugins": [
        "html",
        // "react",
    ],
    rules: {
        "no-multiple-empty-lines": [2, { "max": 2 }],     // 最多两行空行，少了不够，多了没用
        "space-before-function-paren": [0, "always"],     // 不关心函数括号前是否有空格
        "comma-dangle": [2, "only-multiline"],            // 只有多行的时候才允许尾部的多余逗号
        "indent": ["error", 4, { "SwitchCase": 1 }],      // 4空格缩进，Switch case有缩进
        "no-new": [0],                                    // 用vue的时候，免不了new Vue但是不赋值
        "no-trailing-spaces": [2, {
            "skipBlankLines": true                        // 不管空行的空格
        }],
        "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true,                 // 变量声明可以有多空格，来格式化
                "AssignmentExpression": true,               // 赋值操作可以有多控制，来格式化
            }
        }]
        // "one-var-declaration-per-line": [2, "always"],
        // "no-unused-vars": [1, {"args": "none", "varsIgnorePattern": "React|Preact|Root|h"}],
        // "babel/new-cap": [1, {"capIsNew": false}],
        // "babel/no-await-in-loop": 1,
    },
    "globals": {
        "$": true,
        "mqq": true,                                      // mqq
        "QReport": true,                                   // QReport
        "Vue": true
    }
};
