import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://your-domain.com",

  author: {
    name: "冰核智慧课堂生态系统团队",
    url: "https://www.examaware.cn",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://avatars.githubusercontent.com/u/195304368?s=200&v=4",

  repo: "ExamAware/ExamAware-docs",

  docsDir: "src",

  // 导航栏
  navbar: zhNavbar,

  // 侧边栏
  sidebar: zhSidebar,

  // 页脚
  footer: "©2025 ICE | 本项目使用GPLv3开源协议",
  displayFooter: true,

  // 页面元信息本地化
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 主题配置
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  
  darkmode: "switch",
  fullscreen: true,

  // 多语言配置
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "©2025 ICE | 本项目使用GPLv3开源协议",

      displayFooter: true,

      metaLocales: {
        editLink: "编辑此页面",
      },
    },
  },

  // 如果想要实时查看任何改变，启用它。注：这对更新性能有很大负面影响
  // hotReload: true,

  // 纯净模式
  pure: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 搜索插件
    searchPro: {},

    // 代码高亮
    shiki: {
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      highlightLines: true,
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
    },

    // 组件
    components: {
      components: ["Badge", "VPCard"],
    },

    // Markdown 选项卡
    markdownTab: {
      codeTabs: true,
      tabs: true,
    },

    // Markdown 提示
    markdownHint: {
      hint: true,
      alert: true,
    },

    // Markdown 增强
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 图表支持
      chart: true,
      echarts: true,
      flowchart: true,

      // Markdown 增强
      gfm: true,
      mermaid: true,
    },

    // PWA 支持（需要安装 @vuepress/plugin-pwa）
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   themeColor: "#3eaf7c",
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    // },

    // 评论系统（需要安装 @vuepress/plugin-comment）
    // comment: {
    //   provider: "Giscus",
    //   repo: "your/repo",
    //   repoId: "your-repo-id",
    //   category: "General",
    //   categoryId: "your-category-id",
    // },
  },
});