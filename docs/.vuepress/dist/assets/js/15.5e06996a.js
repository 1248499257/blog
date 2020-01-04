(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{210:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("h2",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" Prototype")]),t._v(" "),a("p",[t._v("JavaScript 中的对象有一个特殊的 [[Prototype]] 内置属性，其实就是对于其他对象的引用。几乎所有的对象在创建时 [[Prototype]] 属性都会被赋予一个非空的值。")]),t._v(" "),a("p",[t._v("思考下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n \nmyObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("p",[t._v("当你试图引用对象的属性时会触发原型[[Get]] 操作，比如 myObject.a。对于默认的 [[Get]] 操作来说，第一步是检查对象本身是否有这个属性，如果有的话就使用它。但是如果 "),a("strong",[t._v("a")]),t._v(" 不在 myObject 中，就需要使用对象的 [[Prototype]] 链了。")]),t._v(" "),a("p",[t._v("我们换种写法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anotherObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个关联到 anotherObject 的对象 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" anotherObject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n \nmyObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\n")])])]),a("p",[t._v("现在 myObject 对象的 [[Prototype]] 关联到了 anotherObject。显然 myObject.a 并不存在， 但是尽管如此，属性访问仍然成功地（在 anotherObject 中）找到了值 2。")]),t._v(" "),a("p",[t._v("但是，如果 anotherObject 中也找不到 a 并且 [[Prototype]] 链不为空的话，就会继续查找下去。")]),t._v(" "),a("p",[t._v("这个过程会持续到找到匹配的属性名或者查找完整条 [[Prototype]] 链。如果是后者的话， [[Get]] 操作的返回值是 undefined。")]),t._v(" "),a("p",[t._v("因此，当你通过各种语法进行属性查找时都会查找 [[Prototype]] 链，直到找到属性或者 查找完整条原型链。")]),t._v(" "),a("p",[a("strong",[t._v(".toString()、valueOf() 和其他一些通用的功能 都存在于 Object.prototype 对象上，因此语言中所有的对象都可以使用它们。")])]),t._v(" "),a("h2",{attrs:{id:"总结下prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结下prototype"}},[t._v("#")]),t._v(" 总结下Prototype")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("所有的函数数据类型都天生自带一个属性：prototype(原型)，这个属性的值是一个队形，浏览器会默认给它开辟一个堆内存。")])]),t._v(" "),a("li",[a("p",[t._v("在浏览器给prototype 开辟的堆内存中有一个天生自带的属性：constructor，这个属性存储的值是当前函数本身。")])]),t._v(" "),a("li",[a("p",[t._v("每一个对象都有一个 "),a("strong",[t._v("proto")]),t._v(" 的属性，这个属性指向当前实例所属类的prototype（如果不能确定它是谁的实例，都是Object的实例）。")])]),t._v(" "),a("li",[a("p",[t._v("基类Object的原型上的 "),a("strong",[t._v("proto")]),t._v(" 指向null，因为到最底层类，如果要指向也是指向本身，没意义。")])]),t._v(" "),a("li",[a("p",[t._v("原型链是基于 "),a("strong",[t._v("proto")]),t._v(" 向上查找的机制。当我们操作实例的某个属性或者方法的时候，首先找自己空间中私有的属性或者方法。")]),t._v(" "),a("ul",[a("li",[t._v("结果1: 找到了，则结束查找，使用自己私有的即可。")]),t._v(" "),a("li",[t._v("结果2: 没有找到，则基于__proto__所属类的prototype，如果找到就用这个共有的，如果没找到，基于原型上的__proto__继续向上查找，一直找到Object.prototype的原型为止，如果在没有，操作的属性或者方法不存在。")])])])]),t._v(" "),a("h2",{attrs:{id:"es6中的class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6中的class"}},[t._v("#")]),t._v(" ES6中的class")]),t._v(" "),a("p",[t._v("class的语法解决了典型原型风格代码中许多显而易见的（语法）问题和缺点，举个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("      \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$elem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("              \n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("css")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                 \n                    width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 \n                    height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),t._v("              \n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" $where "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("      \n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$elem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<button>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         \n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" $where "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("         \n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Button \'"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\' clicked!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个例子是想创建一个自定义的控件 "),a("strong",[t._v("button")]),t._v("，假如使用prototype语法的话看起来会非常杂乱无章（这里就不作展示）。")]),t._v(" "),a("h3",{attrs:{id:"class的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class的优点"}},[t._v("#")]),t._v(" class的优点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不再引用杂乱的 .prototype 了。")])]),t._v(" "),a("li",[a("p",[t._v("Button 声 明 时 直 接“ 继 承 ” 了 Widget， 不 再 需 要 通 过 Object.create(..) 来 替 换 .prototype 对象，也不需要设置 ."),a("strong",[t._v("proto")]),t._v("  或者 Object.setPrototypeOf(..)。")])]),t._v(" "),a("li",[a("p",[t._v("可以通过 super(..) 来实现相对多态，这样任何方法都可以引用原型链上层的同名方法。")])]),t._v(" "),a("li",[a("p",[t._v("class 字面语法不能声明属性（只能声明方法）。看起来这是一种限制，但是它会排除掉许多不好的情况，如果没有这种限制的话，原型链末端的“实例”可能会意外地获取其他地方的属性（这些属性隐式被所有“实例”所“共享”）。所以，class 语法实际上可以帮助你避免犯错。")])]),t._v(" "),a("li",[a("p",[t._v("可以通过 extends 很自然地扩展对象（子）类型，甚至是内置的对象（子）类型，比如 Array 或 RegExp。没有 class ..extends 语法时，想实现这一点是非常困难的，基本上只有框架的作者才能搞清楚这一点。但是现在可以轻而易举地做到！")])])]),t._v(" "),a("h3",{attrs:{id:"class的陷阱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class的陷阱"}},[t._v("#")]),t._v(" class的陷阱")]),t._v(" "),a("p",[t._v("class 语法其实并没有解决所有的问题，在 JavaScript 中使用“类”设计模式仍然存在许多深层问题。")]),t._v(" "),a("p",[t._v("首先，你可能会认为 ES6 的 class 语法是向 JavaScript 中引入了一种新的“类”机制，其实不是这样。class 基本上只是现有 [[Prototype]]（委托！）机制的一种语法糖。也就是说，class 并不会像传统面向类的语言一样在声明时静态复制所有行为。如果你 （有意或无意）修改或者替换了父“类”中的一个方法，那子“类”和所有实例都会受到 影响，因为它们在定义时并没有进行复制，只是使用基于 [[Prototype]] 的实时委托。")])])}),[],!1,null,null,null);s.default=e.exports}}]);