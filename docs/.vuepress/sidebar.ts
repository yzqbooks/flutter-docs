import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "第二版序",
      link: "preface",
    },
    {
      text: "第一章：起步",
      collapsible: false,
      children: [
        "/chapter1/mobile_development_intro",
        "/chapter1/flutter_intro",
        "/chapter1/install_flutter",
        "/chapter1/dart",
      ],
    },
    {
      text: "第二章：第一个Flutter应用",
      
      collapsible: false,
      children: [
        "/chapter2/first_flutter_app",
        "/chapter2/flutter_widget_intro",
        "/chapter2/state_manage",
        "/chapter2/flutter_router",
        "/chapter2/flutter_package_mgr",
        "/chapter2/flutter_assets_mgr",
        "/chapter2/flutter_app_debug",
        "/chapter2/thread_model_and_error_report",
      ],
    },
    {
      text: "第三章：基础组件",
      
      collapsible: false,
      children: [
        "/chapter3/text",
        "/chapter3/buttons",
        "/chapter3/img_and_icon",
        "/chapter3/radio_and_checkbox",
        "/chapter3/input_and_form",
        "/chapter3/progress",
      ],
    },
    {
      text: "第四章：布局类组件",
      collapsible: false,
      children: [
        "/chapter4/intro",
        "chapter4/constraints",
        "/chapter4/row_and_column",
        "/chapter4/flex",
        "/chapter4/wrap_and_flow",
        "/chapter4/stack",
        "/chapter4/alignment",
        "chapter4/layoutbuilder",
      ],
    },
    {
      text: "第五章：容器类组件",
      collapsible: false,
      children: [
        "/chapter5/padding",
        "/chapter5/decoratedbox",
        "/chapter5/transform",
        "/chapter5/container",
        "/chapter5/clip",
        "chapter5/fittedbox",
        "/chapter5/material_scaffold",
      ],
    },
    {
      text: "第六章：可滚动组件",
      collapsible: false,
      children: [
        "/chapter6/intro",
        "/chapter6/single_child_scrollview",
        "/chapter6/listview",
        "/chapter6/scroll_controller",
        "/chapter6/animatedlist",
        "/chapter6/gridview",
        "/chapter6/pageview",
        "/chapter6/keepalive",
        "/chapter6/tabview",
        "/chapter6/custom_scrollview",
        "/chapter6/sliver",
        "/chapter6/nestedscrollview",
      ],
    },
    {
      text: "第七章：功能型组件",
      collapsible: false,
      children: [
        "/chapter7/willpopscope",
        "/chapter7/inherited_widget",
        "/chapter7/provider",
        "/chapter7/theme",
        "/chapter7/value_listenable_builder",
        "/chapter7/futurebuilder_and_streambuilder",
        "/chapter7/dailog",
      ],
    },
    {
      text: "第八章：事件处理与通知",
      collapsible: false,
      children: [
        "/chapter8/listener",
        "/chapter8/gesture",
        "/chapter8/hittest",
        "/chapter8/gesture_conflict",
        "/chapter8/eventbus",
        "/chapter8/notification",
      ],
    },
    {
      text: "第九章：动画",
      collapsible: false,
      children: [
        "/chapter9/intro",
        "/chapter9/animation_structure",
        "/chapter9/route_transition",
        "/chapter9/hero",
        "/chapter9/stagger_animation",
        "/chapter9/animated_switcher",
        "/chapter9/animated_widgets",
      ],
    },
    {
      text: "第十章：自定义组件",
      collapsible: false,
      children: [
        "/chapter10/intro",
        "/chapter10/combine",
        "/chapter10/turn_box",
        "/chapter10/custom_paint",
        "/chapter10/gradient_circular_progress_demo",
        "chapter10/custom_checkbox",
        "chapter10/done_widget",
        "chapter10/watermark",
      ],
    },
    {
      text: "第十一章：文件操作与网络请求",
      collapsible: false,
      children: [
        "/chapter11/file_operation",
        "/chapter11/http",
        "/chapter11/dio",
        "/chapter11/download_with_chunks",
        "/chapter11/websocket",
        "/chapter11/socket",
        "/chapter11/json_model",
      ],
    },
    {
      text: "第十二章：Flutter 扩展",
      collapsible: false,
      children: ["/chapter12/package_and_plugin", "/chapter12/flutter_web"],
    },
    {
      text: "第十三章：国际化",
      collapsible: false,
      children: [
        "/chapter13/multi_languages_support",
        "/chapter13/locallization_implement",
        "/chapter13/intl",
        "/chapter13/faq",
      ],
    },
    {
      text: "第十四章：Flutter核心原理",
      collapsible: false,
      children: [
        "/chapter14/flutter_ui_system",
        "/chapter14/element_buildcontext",
        "/chapter14/flutter_app_startup",
        "/chapter14/layout",
        "/chapter14/paint",
        "/chapter14/paint_flow",
        "/chapter14/layer",
        "/chapter14/compositing",
      ],
    },
    {
      text: "第十五章：一个完整的Flutter应用",
      collapsible: false,
      children: [
        "/chapter15/intro",
        "/chapter15/code_structure",
        "/chapter15/models",
        "/chapter15/globals",
        "/chapter15/network",
        "/chapter15/entry",
        "/chapter15/login_page",
        "/chapter15/language_and_theme_setting",
      ],
    },
  ],
});
