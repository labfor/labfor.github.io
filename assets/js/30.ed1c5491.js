(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{261:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"migration-from-0-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-0-x"}},[e._v("#")]),e._v(" Migration from 0.x")]),e._v(" "),s("h2",{attrs:{id:"site-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-config"}},[e._v("#")]),e._v(" Site Config")]),e._v(" "),s("h3",{attrs:{id:"ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ga"}},[e._v("#")]),e._v(" ga "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("GA has been separated into a standalone plugin "),s("router-link",{attrs:{to:"/docs/plugin/official/plugin-google-analytics.html"}},[e._v("@vuepress/plugin-google-analytics")]),e._v(".")],1),e._v(" "),s("p",[e._v("::: upgrade")]),e._v(" "),s("ol",[s("li",[e._v("Install "),s("code",[e._v("@vuepress/plugin-google-analytics")]),e._v(":")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -D @vuepress/plugin-google-analytics@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Update "),s("code",[e._v("vuepress/config.js")]),e._v(":")])]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-  ga: 'UA-12345678-9'\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+  plugins: [\n+    ['@vuepress/google-analytics', {\n+      ga: 'UA-12345678-9'\n+    }]\n+ ]\n")]),e._v("}\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("h3",{attrs:{id:"markdown-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config"}},[e._v("#")]),e._v(" markdown.config "),s("Badge",{attrs:{text:"renamed"}})],1),e._v(" "),s("p",[e._v("Using "),s("code",[e._v("extendMarkdown")]),e._v("：。")]),e._v(" "),s("p",[e._v("::: upgrade\nUpdate "),s("code",[e._v("vuepress/config.js")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("// vuepress/config.js\nmodule.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-  markdown: {\n-    config(md) { /* ... */ }\n-  },\n")]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+  extendMarkdown(md) { /* ... */ }\n")]),e._v("}\n")])])]),s("p",[e._v(":::")]),e._v(" "),s("h3",{attrs:{id:"serviceworker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker"}},[e._v("#")]),e._v(" serviceWorker "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("Service Worker related features have been separated into a standalone plugin "),s("router-link",{attrs:{to:"/docs/plugin/official/plugin-pwa.html"}},[e._v("@vuepress/plugin-pwa")]),e._v(".")],1),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"/docs/plugin/official/plugin-pwa.html#migration-from-0-x"}},[e._v("@vuepress/plugin-pwa > Migration from 0.x")]),e._v("\n:::")],1),e._v(" "),s("h2",{attrs:{id:"default-theme-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-theme-config"}},[e._v("#")]),e._v(" Default Theme Config")]),e._v(" "),s("h3",{attrs:{id:"vuepress-override-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/override.styl")]),e._v(" "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("Replaced by "),s("code",[e._v(".vuepress/styles/palette.styl")]),e._v(".")]),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"/docs/config/#palette-styl"}},[e._v("Config > palette.styl")]),e._v("\n:::")],1),e._v(" "),s("h3",{attrs:{id:"vuepress-style-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/style.styl")]),e._v(" "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("Replaced by "),s("code",[e._v(".vuepress/styles/index.styl")]),e._v(".")]),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"/docs/config/#index-styl"}},[e._v("Config > index.styl")]),e._v("\n:::")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);