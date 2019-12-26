(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{280:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"theme-inheritance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-inheritance"}},[t._v("#")]),t._v(" Theme Inheritance "),a("Badge",{attrs:{type:"warn",text:"beta"}})],1),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("We have two main reasons to support this feature:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("VuePress provides users with a "),a("router-link",{attrs:{to:"/docs/theme/default-theme-config.html"}},[t._v("default theme")]),t._v(", which meets the needs of document writers in most scenarios, even so, there are still many users who choose to "),a("code",[t._v("eject")]),t._v(" and edit it, even if they may only need to make minor changes to one of the components.")],1)]),t._v(" "),a("li",[a("p",[t._v("In "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/custom-themes.html#site-and-page-metadata",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.x"),a("OutboundLink")],1),t._v(", only one "),a("code",[t._v("Layout.vue")]),t._v(" is needed for a theme, so we can achieve simple expansion by directly wrapping "),a("code",[t._v("Layout.vue")]),t._v(" of another theme.")]),t._v(" "),a("p",[t._v("By 1.x, the elements of a theme has become more complex, we have started to have "),a("router-link",{attrs:{to:"/docs/theme/option-api.html"}},[t._v("theme level configuration")]),t._v(", which supports plugins, custom global layout, etc. We have also introduced the "),a("router-link",{attrs:{to:"/docs/theme/writing-a-theme.html#directory-structure"}},[t._v("directory structure conventions")]),t._v(" on theme development, such as "),a("code",[t._v("styles/index.styl")]),t._v(", under this background, we can not achieve inheritance as 0.x did.")],1)])]),t._v(" "),a("p",[t._v("Consequently, we need to provide a reasonable and reliable theme inheritance strategy.")]),t._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("p",[t._v("To introduce this section, let’s start with some basic concepts:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Atomic theme")]),t._v("：that is the parent theme, implemented entirely from scratch, like the default theme.")]),t._v(" "),a("li",[a("strong",[t._v("Derived theme")]),t._v("：that is the child theme, created based on parent theme.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For now theme inheritance doesn’t support high-order inheritance, that means, a derived theme cannot be inherited.")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Suppose you want to create a theme inherited from the default theme, you only need to configure the "),a("router-link",{attrs:{to:"/docs/theme/option-api.html#extend"}},[t._v("extend")]),t._v(" option in your theme configuration:")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/theme-default'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"inheritance-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inheritance-strategy"}},[t._v("#")]),t._v(" Inheritance Strategy")]),t._v(" "),a("p",[t._v("All the capabilities of the parent theme will be "),a("code",[t._v('"passed"')]),t._v(" to the child theme. For file-level conventions, child theme can override it by creating a file with the same name in the same location. For some theme configuration options, such as "),a("a",{attrs:{href:"./option-api.md/globallayout"}},[t._v("globalLayout")]),t._v(", child theme can override it by the same name configuration.")]),t._v(" "),a("p",[t._v("The "),a("router-link",{attrs:{to:"/docs/theme/writing-a-theme.html#directory-structure"}},[t._v("file-level conventions")]),t._v(" are as follows:")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Global Components")]),t._v("，that is the Vue components under "),a("code",[t._v("theme/global-components")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("Components")]),t._v("，that is the Vue components under "),a("code",[t._v("theme/components")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("Global Style and Palette")]),t._v("，that is "),a("code",[t._v("index.styl")]),t._v(" and "),a("code",[t._v("palette.styl")]),t._v(" under "),a("code",[t._v("theme/styles")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("HTML Template")]),t._v(", that is "),a("code",[t._v("dev.html")]),t._v(" and "),a("code",[t._v("ssr.html")]),t._v(" under "),a("code",[t._v("theme/templates")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("Theme-Level App Enhancement File")]),t._v("，that is "),a("code",[t._v("theme/enhanceApp.js")])])]),t._v(" "),a("p",[t._v("For theme configuration, the configuration options that can be overrode by child theme are as follows:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/docs/theme/option-api.html#devtemplate"}},[t._v("devTemplate")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/docs/theme/option-api.html#ssrtemplate"}},[t._v("ssrTemplate")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/docs/theme/option-api.html#globallayout"}},[t._v("globalLayout")])],1)]),t._v(" "),a("p",[t._v("Theme configuration options that cannot be overrode by child theme:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/docs/theme/option-api.html#extend"}},[t._v("extend")])],1)]),t._v(" "),a("p",[t._v("Theme configuration options requiring special treatment:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/docs/theme/option-api.html#plugins"}},[t._v("plugins")]),t._v("：See "),a("a",{attrs:{href:"#override-plugins"}},[t._v("Override Plugins")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"override-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#override-plugins"}},[t._v("#")]),t._v(" Override Plugins")]),t._v(" "),a("p",[t._v("For "),a("router-link",{attrs:{to:"/docs/theme/option-api.html#plugins"}},[t._v("plugins")]),t._v(" in the parent theme, the child theme cannot override it intuitively, but the options of plugin can be overrode by creating plugin configuration with the same name.")],1),t._v(" "),a("p",[t._v("For example, if the parent theme has the following configuration:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parentThemePath/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The child theme can edit the options of plugin in the following ways:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// themePath/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Child theme can even disable it:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// themePath/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You shouldn’t need to do this unless you know for sure that disabling plugins in parent themes won’t cause problems.")])]),t._v(" "),a("h2",{attrs:{id:"override-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#override-components"}},[t._v("#")]),t._v(" Override Components")]),t._v(" "),a("p",[t._v("You may want to override the same-name components in the parent theme. By default, when the components in the parent theme use relative paths to reference other components, you will not be able to do this because you cannot edit the code of the parent theme at runtime.")]),t._v(" "),a("p",[t._v("VuePress achieves this requirement in a clever way, but there is a requirement for the parent theme - "),a("strong",[t._v("All components must use the "),a("code",[t._v("@theme")]),t._v(" alias to refer to other components")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, if you are developing an atomic theme with the following structure:")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n├── components\n│   ├── "),a("code",[t._v("Home.vue")]),t._v("\n│   ├── "),a("code",[t._v("Navbar.vue")]),t._v("\n│   └── "),a("code",[t._v("Sidebar.vue")]),t._v("\n├── layouts\n│   ├── "),a("code",[t._v("404.vue")]),t._v("\n│   └── "),a("code",[t._v("Layout.vue")]),t._v("\n├── package.json\n└── index.js\n:::")]),t._v(" "),a("p",[t._v("Then, in any Vue components on the theme, "),a("strong",[t._v("you should access the theme root directory through "),a("code",[t._v("@theme")])]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Home "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@theme/components/Navbar.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("On this premise, when you create a "),a("code",[t._v("Navbar")]),t._v(" component in the same place in the child theme")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n└── components\n   └── "),a("code",[t._v("Navbar.vue")]),t._v("\n:::")]),t._v(" "),a("p",[a("code",[t._v("@theme/components/Navbar.vue")]),t._v(" will automatically map to the Navbar component in the child theme, and when you remove the component, "),a("code",[t._v("@theme/components/Navbar.vue")]),t._v(" will automatically restore to the Navbar component in the parent theme.")]),t._v(" "),a("p",[t._v('This way, you can "tamper" with some part of an atomic theme.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("You’d better override the component based on the code of the corresponding component in the parent theme.")]),t._v(" "),a("li",[t._v("When developing theme locally, you need to manually restart the dev server when a component is created or removed.")])])]),t._v(" "),a("h2",{attrs:{id:"access-parent-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-parent-theme"}},[t._v("#")]),t._v(" Access Parent Theme")]),t._v(" "),a("p",[t._v("You can use "),a("code",[t._v("@parent-theme")]),t._v(" to access the root path of the parent theme. The following example shows creating a layout component with the same name in a child theme and using slots in the parent theme. "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-vue"),a("OutboundLink")],1),t._v(" is created in this way.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- themePath/components/Foo.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ParentLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ParentLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ParentLayout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@parent-theme/layouts/Layout.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@theme/components/Foo.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ParentLayout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Foo\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);