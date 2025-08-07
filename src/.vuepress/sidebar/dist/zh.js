"use strict";
exports.__esModule = true;
exports.zhSidebar = void 0;
var vuepress_theme_hope_1 = require("vuepress-theme-hope");
exports.zhSidebar = vuepress_theme_hope_1.sidebar({
    "/": [
        "",
        {
            text: "首页",
            link: "index.md"
        },
    ],
    "/guide/": [
        {
            text: "快速上手",
            icon: "install",
            prefix: "guide/",
            children: [
                "install.md"
            ]
        },
    ]
});
