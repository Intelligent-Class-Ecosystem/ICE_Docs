import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/guide/": [
    {
      text: "快速上手",
      icon: "guide",
      prefix: "guide/",
      children: [
        {
          text: "安装",
          icon: "install",
          link: "install.md",
        },
      ],
    },
  ],
});
