(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{210:function(t,a,s){"use strict";var e=s(72);s.n(e).a},254:function(t,a,s){"use strict";s.r(a);s(210);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"markdown-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-extensions"}},[t._v("#")]),t._v(" Markdown Extensions")]),t._v(" "),s("h2",{attrs:{id:"header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors"}},[t._v("#")]),t._v(" Header Anchors")]),t._v(" "),s("p",[t._v("Headers automatically get anchor links applied. Rendering of anchors can be configured using the "),s("router-link",{attrs:{to:"/docs/config/#markdown-anchor"}},[s("code",[t._v("markdown.anchor")])]),t._v(" option.")],1),t._v(" "),s("h2",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),s("h3",{attrs:{id:"internal-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internal-links"}},[t._v("#")]),t._v(" Internal Links")]),t._v(" "),s("p",[t._v("Internal links are converted to "),s("code",[t._v("<router-link>")]),t._v(" for SPA navigation. Also, every "),s("code",[t._v("README.md")]),t._v(" or "),s("code",[t._v("index.md")]),t._v(" contained in each sub-directory will automatically be converted to "),s("code",[t._v("index.html")]),t._v(", with corresponding URL "),s("code",[t._v("/")]),t._v(".")]),t._v(" "),s("p",[t._v("Given the following directory structure:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),s("p",[t._v("And providing you are in "),s("code",[t._v("foo/one.md")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("](/)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to the root README.md --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("](/foo/)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Sends the user to index.html of directory foo --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading")]),t._v("](./#heading)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Anchors user to a heading in the foo README file --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - three")]),t._v("](../bar/three.md)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- You can append .md (recommended) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - four")]),t._v("](../bar/four.html)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Or you can append .html --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"redirection-for-urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirection-for-urls"}},[t._v("#")]),t._v(" Redirection for URLs "),s("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1),t._v(" "),s("p",[t._v("VuePress supports redirecting to clean links. If a link "),s("code",[t._v("/foo")]),t._v(" is not found, VuePress will look for a existing "),s("code",[t._v("/foo/")]),t._v(" or "),s("code",[t._v("/foo.html")]),t._v(". Conversely, when one of "),s("code",[t._v("/foo/")]),t._v(" or "),s("code",[t._v("/foo.html")]),t._v(" is not found, VuePress will also try the other. With this feature, we can customize your website’s URLs with the official plugin "),s("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Regardless of whether the permalink and clean-urls plugins are used, your relative path should be defined by the current file structure. In the above example, even though you set the path of "),s("code",[t._v("/foo/one.md")]),t._v(" to "),s("code",[t._v("/foo/one/")]),t._v(", you should still access "),s("code",[t._v("/foo/two.md")]),t._v(" via "),s("code",[t._v("./two.md")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"external-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-links"}},[t._v("#")]),t._v(" External Links")]),t._v(" "),s("p",[t._v("Outbound links automatically gets "),s("code",[t._v('target="_blank" rel="noopener noreferrer"')]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress on GitHub"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("You can customize the attributes added to external links by setting "),s("router-link",{attrs:{to:"/docs/config/#markdown-externallinks"}},[t._v("config.markdown.externalLinks")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"frontmatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[t._v("#")]),t._v(" Frontmatter")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML frontmatter"),s("OutboundLink")],1),t._v(" is supported out of the box:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("p",[t._v("This data will be available to the rest of the page, along with all custom and theming components.")]),t._v(" "),s("p",[t._v("For more details, check out the "),s("router-link",{attrs:{to:"/docs/guide/frontmatter.html"}},[t._v("Frontmatter")]),t._v(" page.")],1),t._v(" "),s("h2",{attrs:{id:"github-style-tables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-style-tables"}},[t._v("#")]),t._v(" GitHub-Style Tables")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tables")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("col 3 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),s("tr",[s("td",[t._v("col 2 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),s("tr",[s("td",[t._v("zebra stripes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),s("h2",{attrs:{id:"emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[t._v("#")]),t._v(" Emoji 🎉")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(":tada: :100:\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("p",[t._v("🎉 💯")]),t._v(" "),s("p",[t._v("A list of all emojis available can be found "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[[toc]]\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#header-anchors"}},[t._v("Header Anchors")])]),s("li",[s("a",{attrs:{href:"#links"}},[t._v("Links")]),s("ul",[s("li",[s("a",{attrs:{href:"#internal-links"}},[t._v("Internal Links")])]),s("li",[s("a",{attrs:{href:"#redirection-for-urls-badge-text-1-0-0-alpha-37"}},[t._v("Redirection for URLs "),s("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1)]),s("li",[s("a",{attrs:{href:"#external-links"}},[t._v("External Links")])])])]),s("li",[s("a",{attrs:{href:"#frontmatter"}},[t._v("Frontmatter")])]),s("li",[s("a",{attrs:{href:"#github-style-tables"}},[t._v("GitHub-Style Tables")])]),s("li",[s("a",{attrs:{href:"#emoji-tada"}},[t._v("Emoji 🎉")])]),s("li",[s("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),s("li",[s("a",{attrs:{href:"#custom-containers-badge-text-default-theme"}},[t._v("Custom Containers "),s("Badge",{attrs:{text:"default theme"}})],1)]),s("li",[s("a",{attrs:{href:"#syntax-highlighting-in-code-blocks"}},[t._v("Syntax Highlighting in Code Blocks")])]),s("li",[s("a",{attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("Line Highlighting in Code Blocks")])]),s("li",[s("a",{attrs:{href:"#line-numbers"}},[t._v("Line Numbers")])]),s("li",[s("a",{attrs:{href:"#import-code-snippets-badge-text-beta-type-warn"}},[t._v("Import Code Snippets "),s("Badge",{attrs:{text:"beta",type:"warn"}})],1)]),s("li",[s("a",{attrs:{href:"#advanced-configuration"}},[t._v("Advanced Configuration")])])])]),s("p"),t._v(" "),s("p",[t._v("Rendering of TOC can be configured using the "),s("router-link",{attrs:{to:"/docs/config/#markdown-toc"}},[s("code",[t._v("markdown.toc")])]),t._v(" option.")],1),t._v(" "),s("h2",{attrs:{id:"custom-containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-containers"}},[t._v("#")]),t._v(" Custom Containers "),s("Badge",{attrs:{text:"default theme"}})],1),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: details\nThis is a details block, which does not work in IE / Edge\n:::\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This is a tip")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This is a warning")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This is a dangerous warning")])]),t._v(" "),s("p",[t._v("::: details\nThis is a details block, which does not work in IE / Edge\n:::")]),t._v(" "),s("p",[t._v("You can also customize the title of the block:")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("::: danger STOP\nDanger zone, do not proceed\n:::\n\n::: details Click me to view the code\n"),s("span",{pre:!0,attrs:{class:"token code"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),s("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token code-block language-js"}},[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, VuePress!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n:::\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("STOP")]),t._v(" "),s("p",[t._v("Danger zone, do not proceed")])]),t._v(" "),s("p",[t._v("::: details Click me to view the code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, VuePress!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("p",[s("strong",[t._v("Also see:")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.github.io/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"syntax-highlighting-in-code-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlighting-in-code-blocks"}},[t._v("#")]),t._v(" Syntax Highlighting in Code Blocks")]),t._v(" "),s("p",[t._v("VuePress uses "),s("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism"),s("OutboundLink")],1),t._v(" to highlight language syntax in Markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo in todos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todo.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ todo.text }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Check out "),s("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("the list of valid languages"),s("OutboundLink")],1),t._v(" on the Prism site.")]),t._v(" "),s("h2",{attrs:{id:"line-highlighting-in-code-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("#")]),t._v(" Line Highlighting in Code Blocks")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("``` js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"line-numbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-numbers"}},[t._v("#")]),t._v(" Line Numbers")]),t._v(" "),s("p",[t._v("You can enable line numbers for each code blocks via config:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineNumbers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("ul",[s("li",[t._v("Demo:")])]),t._v(" "),s("picture",[s("source",{attrs:{srcset:"/line-numbers-desktop.png",media:"(min-width: 719px)"}}),t._v(" "),s("img",{staticClass:"line-numbers-desktop-snap",attrs:{src:"/line-numbers-desktop.png",alt:"Image"}})]),t._v(" "),s("picture",[s("source",{attrs:{srcset:"/line-numbers-mobile.gif",media:"(max-width: 719px)"}}),t._v(" "),s("img",{staticClass:"line-numbers-mobile-snap",attrs:{src:"/line-numbers-mobile.gif",alt:"Image"}})]),t._v(" "),s("h2",{attrs:{id:"import-code-snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-code-snippets"}},[t._v("#")]),t._v(" Import Code Snippets "),s("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),s("p",[t._v("You can import code snippets from existing files via following syntax:")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<<< @/filepath\n")])])]),s("p",[t._v("It also supports "),s("a",{attrs:{href:"#line-highlighting-in-code-blocks"}},[t._v("line highlighting")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<<< @/filepath{highlightLines}\n")])])]),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<<< @/../@vuepress/markdown/"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("__")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("tests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("__")])]),t._v("/fragments/snippet.js{2}\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Code snippet path not found: /home/liucheng/labfor.github.io/@vuepress/markdown/__tests__/fragments/snippet.js")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Since the import of the code snippets will be executed before webpack compilation, you can’t use the path alias in webpack. The default value of "),s("code",[t._v("@")]),t._v(" is "),s("code",[t._v("process.cwd()")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"advanced-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[t._v("#")]),t._v(" Advanced Configuration")]),t._v(" "),s("p",[t._v("VuePress uses "),s("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),s("OutboundLink")],1),t._v(" as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the "),s("code",[t._v("markdown-it")]),t._v(" instance using the "),s("code",[t._v("markdown")]),t._v(" option in "),s("code",[t._v(".vuepress/config.js")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  markdown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-anchor")]),t._v("\n    anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permalink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-toc")]),t._v("\n    toc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" includeLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extendMarkdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use more markdown-it plugins!")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports},72:function(t,a,s){}}]);