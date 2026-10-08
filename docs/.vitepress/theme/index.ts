import { h, App } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

import Visitor from "./components/Visitor.vue";
import Copyright from "./components/Copyright.vue";
import MNavLinks from "./components/MNavLinks.vue";
import XMindEmbedViewer from "./components/XmindViewer.vue";

import "./styles/index.scss";
import "./styles/var.scss";
import "./styles/fonts.scss";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(DefaultTheme.Layout, props, {
      /**
       * 相关插槽
       * https://vitepress.dev/guide/extending-default-theme#layout-slots
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      "nav-bar-title-after": () => h(Visitor),
      "doc-after": () => h(Copyright),
      // 'aside-bottom': () => h(AsideSponsors)
    });
  },
  enhanceApp({ app }: { app: App }) {
    app.component("MNavLinks", MNavLinks);
    app.component("XmindViewer", XMindEmbedViewer);
    app.provide("DEV", process.env.NODE_ENV === "development");
  },
};
