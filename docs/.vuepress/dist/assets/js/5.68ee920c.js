(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{213:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[t._v("#")]),t._v(" Flex布局")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("布局的传统解决方案是基于盒子模型（content+padding+border+margin），依赖于display+position+float来实现，灵活性比较差。而且在网页布局还未进入CSS的时代，排版几乎都是通过table元素来实现，因为在table的单元格里面我们可以使用align、vailgn来实现水平和垂直方向的对齐（现在几乎不用table布局，因为其性能较差，需等待数据加载完成才能进行显示）。顾此，在2009年W3C提出了Flex布局，即译为弹性布局。下面先从基本概念上进行了解。")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("首先尝试一下利用flex做一个居中：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex \n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center\n")])])]),a("p",[t._v("就是这么简单就实现了垂直、水平居中！！！但是，"),a("strong",[t._v("justify-content")]),t._v(" 和 "),a("strong",[t._v("align-items")]),t._v(" 到底是什么呢？哪里可以看出横向和纵向的区别？")]),t._v(" "),a("p",[t._v("Flex核心概念就是 "),a("strong",[t._v("容器")]),t._v(" 和 "),a("strong",[t._v("轴")]),t._v(" 。容器则包括外层的 "),a("strong",[t._v("父容器")]),t._v(" 和内层的 "),a("strong",[t._v("子容器")]),t._v("，轴包括 "),a("strong",[t._v("X轴（主轴）")]),t._v(" 和 "),a("strong",[t._v("Y轴（交叉轴）")]),t._v("，可以说flex的全部特性都构建在这两个概念上面。flex布局涉及到12个属性，其中父容器、子容器各6个。不过常用的只有4个，父容器和子容器各2个，那么我们就先从常用的说起吧。")]),t._v(" "),a("h2",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),a("p",[t._v("容器具有这样的特点：父容器可以同一设置子容器的排列方式，子容器也可以设置自身的排列方式，但是两者同时设置的时候，则以子容器为标准。")]),t._v(" "),a("h3",{attrs:{id:"父容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父容器"}},[t._v("#")]),t._v(" 父容器")]),t._v(" "),a("p",[t._v("设置子容器沿X轴排列：justify-content")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("justify-content 属性用于定义如何沿着X轴方向排列子容器\n                                                             \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 起始端对齐\n \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("末尾端对齐\n \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("center")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 居中对齐\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("space-around")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 子容器沿X轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("space-between")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切\n")])])]),a("p",[t._v("设置子容器沿Y轴排列：align-items")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("align-items   用来定义如何沿着Y轴方向分配子容器的间距\n\nflex-start：起始端对齐\n\nflex-end：末尾段对齐\n\ncenter：居中对齐\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("baseline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 基线对齐， 这里的 baseline 默认是指首行文字，即 first-baseline ，所有子容器向基线对齐，Y轴起点到元素基线的最大距离的子容器将会与Y轴相切以确定基线。\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("stretch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 子容器Y轴的尺寸拉伸至与父容器一致。\n")])])]),a("h3",{attrs:{id:"子容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子容器"}},[t._v("#")]),t._v(" 子容器")]),t._v(" "),a("p",[t._v("在主轴上如何伸缩：flex")]),t._v(" "),a("p",[t._v("子容器是由弹性的（flex既弹性），他们回自动填补剩余空间，子容器的伸缩比例由 flex 属性去进行确定。")]),t._v(" "),a("p",[t._v("flex 的值可以是无单位的数字（例如：1，2，3），也可以是有单位的数字（例如：15px，30px，60px），还可以是none关键字。子容器会按照flex的尺寸比例自动伸缩，如果取值为none就不伸缩。\n熟练 flex 是多个属性的缩写，允许 1-3 个值连用，但通常用1个值就可以满足需求啦，它的全部写法可以参考下图。")]),t._v(" "),a("p",[t._v("单独设置子容器如何沿Y轴排列：align-self")]),t._v(" "),a("p",[t._v("每个子容器都可以单独定义沿Y轴排列的方式，此属性的可选值与父容器 aligh-items 属性完全一致，如果两者同时设置时，则以子容器 align-self属性为准。")]),t._v(" "),a("h2",{attrs:{id:"轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轴"}},[t._v("#")]),t._v(" 轴")]),t._v(" "),a("p",[t._v("轴 包含 "),a("strong",[t._v("主轴")]),t._v(" 和 "),a("strong",[t._v("交叉轴")]),t._v("，我们知道 "),a("strong",[t._v("justify-content")]),t._v(" 属性决定子容器沿主轴的排列方式， "),a("strong",[t._v("align-items")]),t._v(" 属性决定子容器沿着Y轴的排列方式。那么轴又是如何确定的呢？在flex布局中，flex-direction 属性决定主轴的方向，交叉轴的方向由主轴确定。")]),t._v(" "),a("h3",{attrs:{id:"主轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主轴"}},[t._v("#")]),t._v(" 主轴")]),t._v(" "),a("p",[t._v("主轴的起始端由 flex-start 来表示，末端由flex-end来表示。不同的主轴方向对应的起始端和末尾端的位置也不同。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("向右： flex-direction：row\n                                                        \n向下： flex-direction：column\n                                                       \n向左：flex-direction：row-reverse\n                                                        \n向上：flex-direction：column-reverse\n")])])]),a("h3",{attrs:{id:"交叉轴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉轴"}},[t._v("#")]),t._v(" 交叉轴")]),t._v(" "),a("p",[t._v("主轴沿逆时针方向旋转90度就得到了交叉轴，交叉轴的起始端和末尾端也由 flex-start 和 flex-end来表示。")]),t._v(" "),a("p",[t._v("上面介绍的几项属性是flex布局中最常用的部分，一般来说可以满足大多需求，如果实现复杂的布局还需要深入了解更多的属性。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("因为markdown的原因有很多图片没有放上来，完整版的记录在这里"),a("a",{attrs:{href:"https://blog.csdn.net/qq_43516152/article/details/97144147",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);