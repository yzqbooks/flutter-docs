import { defineUserConfig } from "@vuepress/cli";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import theme from "./themeConfig";
import {searchProPlugin} from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/flutter-docs/",
  dest: "./dist",
  title: "《Flutter实战·第二版》",
  locales: {
    "/": {
      // 设置正在使用的语言
      lang: "zh-CN",
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",

        href: `/baike/images/logo.svg`,
      },
    ],

    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        //我的vscodeiconfont库
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3267094_1gli0nmxpsr.css",
      },
    ],
  ],

  // site-level locales config

  lang: "zh-CN",

  description: "A simple baike",

  theme: theme,

  plugins: [
    searchProPlugin({
      indexContent:true
    }),
    prismjsPlugin({
      preloadLanguages: ["autohotkey", "go", "xml", "dart"],
    }),
  ],
});
