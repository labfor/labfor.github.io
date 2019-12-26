(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{257:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"permalinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalinks"}},[e._v("#")]),e._v(" Permalinks")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Before 1.x.x, VuePress retrieves all Markdown files in the documents source directory and defines the page links based on the file hierarchy. For example if you have the following file structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])])]),a("p",[e._v("Then you will get following available pages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])])]),a("p",[e._v("Yet, for a blog system, we hope that the link of a post can be customized. VuePress started supporting this feature, known as permalink, from "),a("code",[e._v("1.0.0")]),e._v(". Then, the actual pages would be:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/source/\n/source/tags/\n/source/2018/4/1/intro-vuepress.html\n")])])]),a("p",[e._v("We have seen the shadow of the blog. Let’s continue to look down.")]),e._v(" "),a("h2",{attrs:{id:"permalinks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalinks-2"}},[e._v("#")]),e._v(" Permalinks")]),e._v(" "),a("p",[e._v("A permalink is a URL that is intended to remain unchanged for a long time, yielding a hyperlink that is less susceptible to link rot"),a("sup",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Link_rot",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1)]),e._v(". VuePress supports a flexible way to build permalinks, allowing you to use template variables.")]),e._v(" "),a("p",[e._v("The default permalink is "),a("code",[e._v("/:regular")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"configure-permalinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-permalinks"}},[e._v("#")]),e._v(" Configure Permalinks")]),e._v(" "),a("p",[e._v("You can configure globally to apply it for all pages:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .vuepress/config.js")]),e._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  permalink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/:year/:month/:day/:slug'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You can also set permalink on a page only, and it will have a higher priority than the global settings.")]),e._v(" "),a("p",[e._v("📝 "),a("strong",[e._v("hello.md")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: Hello World\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[e._v("permalink: /hello-world\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\nHello!\n")])])]),a("h3",{attrs:{id:"template-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-variables"}},[e._v("#")]),e._v(" Template Variables")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variable")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v(":year")]),e._v(" "),a("td",[e._v("Published year of posts (4-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":month")]),e._v(" "),a("td",[e._v("Published month of posts (2-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":i_month")]),e._v(" "),a("td",[e._v("Published month of posts (Without leading zeros)")])]),e._v(" "),a("tr",[a("td",[e._v(":day")]),e._v(" "),a("td",[e._v("Published day of posts (2-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":i_day")]),e._v(" "),a("td",[e._v("Published day of posts (Without leading zeros)")])]),e._v(" "),a("tr",[a("td",[e._v(":slug")]),e._v(" "),a("td",[e._v("Slugified file path (Without extension)")])]),e._v(" "),a("tr",[a("td",[e._v(":regular")]),e._v(" "),a("td",[e._v("Permalink generated by VuePress by default, for implementation see "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);