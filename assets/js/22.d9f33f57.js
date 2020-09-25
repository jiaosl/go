(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"go-defer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-defer"}},[s._v("#")]),s._v(" Go Defer")]),s._v(" "),n("p",[s._v("Defer 用来保证一个函数调用会在程序执行的最后被调用。通常用于资源清理工作。")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 假设我们想创建一个文件，然后写入数据，最后关闭文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在使用createFile得到一个文件对象之后，我们使用defer")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 来调用关闭文件的方法closeFile，这个方法将在main函数")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后被执行，也就是writeFile完成之后")]),s._v("\n\tf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/defer.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Windows下面使用这个语句")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// f := createFile("D:\\\\Temp\\\\defer.txt")')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("closeFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("File "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"creating"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("panic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("writeFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("File"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"writing"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fprintln")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("closeFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("File"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"closing"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("运行结果")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("creating\nwriting\nclosing\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("使用defer来调用closeFile函数可以保证在main函数结束之前，关闭文件的操作一定会被执行。")])])}),[],!1,null,null,null);t.default=e.exports}}]);