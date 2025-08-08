import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/ICE_Docs",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Intelligent Class Ecosystem",
      description: "ICE文档站",
    },
    "/en/": {
      lang: "en-US",
      title: "ICE Documentation",
      description: "documentation of ICE",
    },
  },

  head: [
    // MXA 分析脚本
    [
      "script",
      {
        charset: "UTF-8",
        id: "MXA_COLLECT",
        src: "//mxana.tacool.com/sdk.js",
      },
    ],
    [
      "script",
      {},
      `MXA.init({ id: "c1-YBFDQnwP", useHeatMap: true, useHash: true, useErrorLog: true })`,
    ],
  ],

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
