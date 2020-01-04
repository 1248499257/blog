(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{208:function(a,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"对《你不知道的js》的记录-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对《你不知道的js》的记录-一"}},[a._v("#")]),a._v(" 对《你不知道的JS》的记录 一")]),a._v(" "),s("h2",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[a._v("#")]),a._v(" 作用域")]),a._v(" "),s("p",[a._v("几乎所有编程语言的最基本功能之一，就是能够存储变量当中的值，并且能在之后对这个值进行访问或修改。事实上，正是这种储存和访问变量的值的能力将状态带给了程序。但是这些变量真正住在哪里？程序运行时要如何找到它们呢？")]),a._v(" "),s("h3",{attrs:{id:"编译原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[a._v("#")]),a._v(" 编译原理")]),a._v(" "),s("p",[a._v("在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为“编译”")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("分词/词法分析：")]),s("br"),a._v("\n这个过程会将由字符组成的字符串分解成对编程语言来说有意义的代码块，这些代码块被称为词法单元（token）。例如:")])]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("这段程序会被分为：")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("；\n")])])]),s("p",[a._v("空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("解析/语法分析：")]),s("br"),a._v("\n这个过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（AST）。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("代码生成：")]),s("br"),a._v("\n将AST转换为可执行代码的过程称为代码生成。这个过程与语言、目标平台等息息相关。")])])]),a._v(" "),s("h3",{attrs:{id:"作用域中的演员表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域中的演员表"}},[a._v("#")]),a._v(" 作用域中的演员表")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("引擎—从头到尾负责整个JavaScript程序的编译以及执行过程")])]),a._v(" "),s("li",[s("p",[a._v("编译器—引擎的好朋友之一，负责语法分析以及代码生成等脏活累活")])]),a._v(" "),s("li",[s("p",[a._v("作用域—引擎的另一位好朋友，负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限")])])]),a._v(" "),s("h3",{attrs:{id:"编译器有话说"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译器有话说"}},[a._v("#")]),a._v(" 编译器有话说")]),a._v(" "),s("p",[a._v("引擎会为变量进行"),s("strong",[a._v("LHS")]),a._v("查询 或者是"),s("strong",[a._v("RHS")]),a._v("查询 。如果查找的目的是为了对变量进行赋值，那么就会使用"),s("strong",[a._v("LHS")]),a._v("查询，如果目的是获取变量的值，就会使用"),s("strong",[a._v("RHS")]),a._v("查询。JavaScript引擎首先会在代码执行前对其进行编译，在这个过程中，像 var a = 2 这样的声明会被拆成2个步骤：")]),a._v(" "),s("ol",[s("li",[a._v("首先，var a 在其作用域中声明新变量。这会是最开始的阶段")]),a._v(" "),s("li",[a._v("接下来，a = 2会查询（LHS）变量a 并对其进行赋值")])]),a._v(" "),s("p",[a._v("两个查询都会从当前作用域开始，如果有需要，就会向上级作用域继续查找目标标识符（嵌套作用域）。不成功的"),s("strong",[a._v("RHS")]),a._v("引用会导致抛出 ReferenceError 异常。不成功的"),s("strong",[a._v("LHS")]),a._v("引用会导致自动隐式地创建一个全局变量（非严格模式下）")]),a._v(" "),s("h3",{attrs:{id:"函数作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[a._v("#")]),a._v(" 函数作用域")]),a._v(" "),s("p",[a._v("函数是 JavaScript 中最常见的作用域单元。本质上，声明在一个函数内部的变量或函数会在所处的作用域中“隐藏”起来，这是有意为之的良好设计原则。")]),a._v(" "),s("p",[a._v("但函数并不是唯一的作用域单元。块作用域指的是变量和函数不仅可以属于所处的作用域，但也可以属于某个代码块（通常指{ ... }内部）")]),a._v(" "),s("p",[a._v("从 ES3 开始， "),s("strong",[a._v("try/catch")]),a._v(" 结构在catch分句中具有块作用域。")]),a._v(" "),s("p",[a._v("在 ES6 中引入了 let 关键字（var 关键字的表亲），用来在任意代码块中声明变量。")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),s("p",[a._v("会声明一个劫持了 if { ... } 块的变量，并且将变量添加到这个块中。")]),a._v(" "),s("p",[a._v("任何声明在某个作用域内的变量，都将附属于这个作用域")]),a._v(" "),s("h3",{attrs:{id:"动态作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态作用域"}},[a._v("#")]),a._v(" 动态作用域")]),a._v(" "),s("p",[a._v("词法作用域是一套关于引擎如何寻找变量以及会在何处找到变量的规则。动态作用域似乎暗示有很好的理由让作用域作为一个在运行时就被动态确定的形式，而不是在写代码时进行静态确定的形式")]),a._v(" "),s("p",[a._v("换句话说，动态作用域并不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调用。也就是作用域链是基于调用栈，而不是代码中的作用域嵌套")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//如果JavaScript是动态作用域的话此时输出的是3")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"提升——先有蛋后有鸡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提升——先有蛋后有鸡"}},[a._v("#")]),a._v(" 提升——先有蛋后有鸡")]),a._v(" "),s("p",[a._v("首先上文中有说过编译的三个阶段，引擎会在 JavaScript 代码之前进行一次编译。编译阶段的一部分工作就是找到所有的声明（ var, 函数声明..），并用合适的作用域把它关联起来。")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])])]),s("p",[a._v("正确步骤应该是")]),a._v(" "),s("ol",[s("li",[a._v("var  a")]),a._v(" "),s("li",[a._v("a = 2\n第一个声明是在编译阶段执行的，第二个赋值声明会被留在原地等待执行阶段")])]),a._v(" "),s("p",[a._v("这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。可以将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域最顶端，这个过程被称为 “提升”")]),a._v(" "),s("p",[a._v("声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升。")]),a._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("（ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("）\n")])])]),s("p",[a._v("所以要尽量注意避免重复声明，特别是当普通的 var 声明和 函数声明混合在一起的时候，否则会引起很多危险的问题")]),a._v(" "),s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[a._v("#")]),a._v(" 闭包")]),a._v(" "),s("p",[a._v("当函数可以记住并访问所在的词法作用域，即函数是在当前词法作用域之外执行，此时就产生了闭包。")]),a._v(" "),s("p",[a._v("本质上无论何时何地，如果将函数（访问它们各自的词法作用域）当作第一级的值类型并到处传递，你就会看到闭包在这些函数中的应用。在"),s("strong",[a._v("定时器、事件监听器、Ajax请求、跨窗口通信、WEB WORKERS")]),a._v("或者其它的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包")]),a._v(" "),s("p",[a._v("闭包是一个非常强大的工具，可以用多种形式来实现模块等模式")]),a._v(" "),s("p",[a._v("模块有两个重要特征：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("为创建内部作用域而调用了一个包装函数。")])]),a._v(" "),s("li",[s("p",[a._v("包装函数的返回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);