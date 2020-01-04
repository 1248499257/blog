(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(t,a,e){"use strict";e.r(a);var i=e(0),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"认识http-缓存篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认识http-缓存篇"}},[t._v("#")]),t._v(" 认识HTTP----缓存篇")]),t._v(" "),e("p",[e("strong",[t._v("本文内容大多参考"),e("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《图解HTTP》一书"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"认识代理服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认识代理服务器"}},[t._v("#")]),t._v(" 认识代理服务器")]),t._v(" "),e("p",[t._v("所以讲缓存为什么要先扯代理服务器？别急，让我们看一下一个请求的简单示意图。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-2f83dd324ca06c63.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("我们看到客户端(用户)发送了一个请求并不是直接发给源服务器的而是经过了代理服务器，然后经由代理服务器再发送给源服务器，响应也同样遵循这个顺序。\n那么代理服务器在这中间担任了什么角色？")]),t._v(" "),e("h3",{attrs:{id:"代理服务器的分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理服务器的分类"}},[t._v("#")]),t._v(" 代理服务器的分类")]),t._v(" "),e("ul",[e("li",[t._v("缓存代理\n代理转发响应时，缓存代理（Caching Proxy）会预先将资源的副本（缓存）保存在代理服务器上。当代理再次接收到对相同资源的请求时，就可以不从源服务器那里\n获取资源，而是将之前缓存的资源作为响应返回。")]),t._v(" "),e("li",[t._v("透明代理（本文不做细致讨论）\n转发请求或响应时，不对报文做任何加工的代理类型被称为透明代理（Transparent Proxy）。反之，对报文内容进行加工的代理被称为非透明代理。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-d11ea257f3348fb1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"浏览器、代理、服务器三者关系"}})]),t._v(" "),e("h2",{attrs:{id:"保存资源的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存资源的缓存"}},[t._v("#")]),t._v(" 保存资源的缓存")]),t._v(" "),e("p",[t._v("缓存是指代理服务器或客户端本地磁盘内保存的资源副本。利用缓存可减少对源服务器的访问，因此也就节省了通信流量和通信时间。\n缓存服务器是代理服务器的一种，并归类在缓存代理类型中。换句话说，当代理转发从服务器返回的响应时，代理服务器将会保存一份资源的副本。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-f0b2c6574f5d4670.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-d469c7564bf7dc8d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("缓存服务器的优势在于利用缓存可避免多次从源服务器转发资源。因此客户端可就近从缓存服务器上获取资源，而源服务器也不必多次处理相同的请求了。")]),t._v(" "),e("h3",{attrs:{id:"缓存的有效期限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存的有效期限"}},[t._v("#")]),t._v(" 缓存的有效期限")]),t._v(" "),e("p",[t._v("即便缓存服务器和客户端内有缓存，也不能每次都给我返回缓存吧，如果是这样，源服务器更新了我也不知道，因为我每次都是看缓存的资源。\n为了解决这个问题，针对缓存设计了时效性的概念：\n即使存在缓存，也会因为客户端的要求、缓存的有效期等因素，向源服务器确认资源的有效性。若判断缓存失效，缓存服务器将会再次从源服务器上获取“新”资源。\n"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-7b2ba0f55384fc8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"客户端的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端的缓存"}},[t._v("#")]),t._v(" 客户端的缓存")]),t._v(" "),e("p",[t._v("缓存不仅可以存在于缓存服务器内，还可以存在客户端浏览器中。以Internet Explorer 程序为例，把客户端缓存称为临时网络文件（Temporary Internet File）。\n浏览器缓存如果有效，就不必再向服务器请求相同的资源了，可以直接从本地磁盘内读取。\n另外，和缓存服务器相同的一点是，当判定缓存过期后，会向源服务器确认资源的有效性。若判断浏览器缓存失效，浏览器会再次请求新资源。\n"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-299403c724b8a2e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"与控制缓存相关的http首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与控制缓存相关的http首部字段"}},[t._v("#")]),t._v(" 与控制缓存相关的HTTP首部字段")]),t._v(" "),e("h3",{attrs:{id:"http1-0-时代的缓存方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-时代的缓存方式"}},[t._v("#")]),t._v(" http1.0 时代的缓存方式")]),t._v(" "),e("h4",{attrs:{id:"pragma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[t._v("#")]),t._v(" Pragma")]),t._v(" "),e("p",[t._v("Pragma 是HTTP/1.1 之前版本的历史遗留字段，仅作为与HTTP/1.0的向后兼容而定义。\n规范定义的形式唯一，如下所示。")]),t._v(" "),e("p",[e("code",[t._v("Pragma: no-cache")])]),t._v(" "),e("p",[t._v("该首部字段属于通用首部字段，但只用在客户端发送的请求中。客户端会要求所有的中间服务器不返回缓存的资源。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b7cfed33d7dd97aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("所有的中间服务器如果都能以HTTP/1.1 为基准， 那直接采用Cache-Control: no-cache 指定缓存的处理方式是最为理想的。但要整体掌握全部中间服务器使用的HTTP 协议版本却是不现实的。因此，发送的请求会同时含有下面两个首部字段。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Cache-Control: no-cache\nPragma: no-cache\n")])])]),e("h4",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-8898bb96dfca4ab5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Expires: Wed, 04 Jul 2012 08:26:05 GMT")])]),t._v(" "),e("p",[t._v("首部字段Expires 会将资源失效的日期告知客户端。缓存服务器在接收到含有首部字段Expires 的响应后，会以缓存来应答请求，在Expires 字段值指定的时间之前，响应的副本会一直被保存。当超过指定的时间后，缓存服务器在请求发送过来时，会转向源服务器请求资源。")]),t._v(" "),e("p",[t._v("源服务器不希望缓存服务器对资源缓存时，最好在Expires 字段内写入与首部字段Date 相同的时间值。\n但是，当首部字段Cache-Control 有指定max-age 指令时，比起首部字段Expires，会优先处理max-age 指令。")]),t._v(" "),e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),e("p",[t._v("通过指定首部字段Cache-Control 的指令，就能操作缓存的工作机制。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-c3b31fc74a5d48df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"首部字段Cache-Control 能够控制缓存的行为"}})]),t._v(" "),e("p",[t._v("指令的参数是可选的，多个指令之间通过“,”分隔。首部字段Cache-Control 的指令在请求和响应下都适用。")]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: private, max-age=0, no-cache")])]),t._v(" "),e("h4",{attrs:{id:"cache-control指令一览："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control指令一览："}},[t._v("#")]),t._v(" Cache-Control指令一览：")]),t._v(" "),e("p",[t._v("可用的指令按请求和响应分类如下所示:")]),t._v(" "),e("h4",{attrs:{id:"缓存请求指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存请求指令"}},[t._v("#")]),t._v(" 缓存请求指令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("指令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("no-cache")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("强制向源服务器再次验证")])]),t._v(" "),e("tr",[e("td",[t._v("no-store")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不缓存请求或响应的任何内容")])]),t._v(" "),e("tr",[e("td",[t._v("max-age = [ 秒]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须有")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("响应的最大Age值")])]),t._v(" "),e("tr",[e("td",[t._v("max-stale( = [ 秒])")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可省略")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("接收已过期的响应")])]),t._v(" "),e("tr",[e("td",[t._v("min-fresh = [ 秒]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须有")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("期望在指定时间内的响应仍有效")])]),t._v(" "),e("tr",[e("td",[t._v("no-transform")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("代理不可更改媒体类型")])]),t._v(" "),e("tr",[e("td",[t._v("only-if-cached")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("从缓存获取资源")])]),t._v(" "),e("tr",[e("td",[t._v("cache-extension")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("新指令标记（token）")])])])]),t._v(" "),e("h4",{attrs:{id:"缓存响应指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存响应指令"}},[t._v("#")]),t._v(" 缓存响应指令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("指令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("public")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("可向任意方提供响应的缓存")])]),t._v(" "),e("tr",[e("td",[t._v("private")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可省略")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("仅向特定用户返回响应")])]),t._v(" "),e("tr",[e("td",[t._v("no-cache")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可省略")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("缓存前必须先确认其有效性")])]),t._v(" "),e("tr",[e("td",[t._v("no-store")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不缓存请求或响应的任何内容")])]),t._v(" "),e("tr",[e("td",[t._v("no-transform")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("代理不可更改媒体类型")])]),t._v(" "),e("tr",[e("td",[t._v("must-revalidate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("可缓存但必须再向源服务器进行确认")])]),t._v(" "),e("tr",[e("td",[t._v("proxy-revalidate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("要求缓存服务器对缓存的响应有效性再进行确认")])]),t._v(" "),e("tr",[e("td",[t._v("max-age = [ 秒]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须有")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("响应的最大Age值")])]),t._v(" "),e("tr",[e("td",[t._v("s-maxage = [ 秒]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须有")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("公共缓存服务器响应的最大Age值")])]),t._v(" "),e("tr",[e("td",[t._v("cache-extension")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("新指令标记（token）")])])])]),t._v(" "),e("h3",{attrs:{id:"cache-control指令详细介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control指令详细介绍"}},[t._v("#")]),t._v(" Cache-Control指令详细介绍")]),t._v(" "),e("h4",{attrs:{id:"表示是否能缓存的指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表示是否能缓存的指令"}},[t._v("#")]),t._v(" 表示是否能缓存的指令")]),t._v(" "),e("p",[e("strong",[t._v("public指令")]),t._v(" "),e("code",[t._v("Cache-Control: public")])]),t._v(" "),e("p",[t._v("当指定使用public 指令时，则明确表明其他用户也可利用缓存。")]),t._v(" "),e("p",[e("strong",[t._v("private指令")]),t._v(" "),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-afbcf62c66df5f58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: private")])]),t._v(" "),e("p",[t._v("当指定private 指令后，响应只以特定的用户作为对象，这与public\n指令的行为相反。\n缓存服务器会对该特定用户提供资源缓存的服务，对于其他用户发\n送过来的请求，代理服务器则不会返回缓存。")]),t._v(" "),e("p",[e("strong",[t._v("no-cache指令")]),t._v(" "),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-47544fb4e6259be7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: no-cache")])]),t._v(" "),e("p",[t._v("使用no-cache 指令的目的是为了防止从缓存中返回过期的资源。客户端发送的请求中如果包含no-cache 指令，则表示客户端将不会接收缓存过的响应。于是，“中间”的缓存服务器必须把客户端请求转发给源服务器。\n如果服务器返回的响应中包含no-cache 指令，那么缓存服务器不能对资源进行缓存。源服务器以后也将不再对缓存服务器请求中提出的资源有效性进行确认，且禁止其对响应资源进行缓存操作。")]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: no-cache=Location")])]),t._v(" "),e("p",[t._v("由服务器返回的响应中，若报文首部字段Cache-Control 中对no-cache字段名具体指定参数值，那么客户端在接收到这个被指定参数值的首部字段对应的响应报文后，就不能使用缓存。换言之，无参数值的首部字段可以使用缓存。只能在响应指令中指定该参数。")]),t._v(" "),e("h4",{attrs:{id:"控制可执行缓存的对象的指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制可执行缓存的对象的指令"}},[t._v("#")]),t._v(" 控制可执行缓存的对象的指令")]),t._v(" "),e("p",[e("strong",[t._v("no-store指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: no-store")])]),t._v(" "),e("p",[t._v("当使用no-store 指令时，暗示请求（和对应的响应）或响应中包含机密信息。\n因此，该指令规定缓存不能在本地存储请求或响应的任一部分。")]),t._v(" "),e("p",[e("strong",[t._v("ps:从字面意思上很容易把no-cache误解成为不缓存，但事实上no-cache代表不缓存过期的资源，缓存会向源服务器进行有效期确认后处理资源，也许称为do-not-serve-from-cache-without-revalidation更合适。no-store 才是真正地不进行缓存，请读者注意区别理解。")])]),t._v(" "),e("h4",{attrs:{id:"指定缓存期限和认证的指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定缓存期限和认证的指令"}},[t._v("#")]),t._v(" 指定缓存期限和认证的指令")]),t._v(" "),e("p",[e("strong",[t._v("s-maxage指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: s-maxage=604800 //（单位：秒）")])]),t._v(" "),e("p",[t._v("s-maxage 指令的功能和max-age 指令的功能相同， 它们的不同点是s-maxage 指令只适用于供多位用户使用的公共缓存服务器(这里指代理服务器)。也就是说，对于向同一用户重复返回响应的服务器来说，这个指令没有任何作用。\n另外，当使用s-maxage 指令后，则直接忽略对Expires 首部字段及max-age 指令的处理。")]),t._v(" "),e("p",[e("strong",[t._v("max-age指令")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-bebb1dd149fa52cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: max-age=604800 //（单位：秒）")])]),t._v(" "),e("p",[t._v("当客户端发送的请求中包含max-age 指令时，如果判定缓存资源的缓存时间数值比指定时间的数值更小，那么客户端就接收缓存的资源。\n另外，当指定max-age 值为0，那么缓存服务器通常需要将请求转发给源服务器。\n当服务器返回的响应中包含max-age 指令时，缓存服务器将不对资源的有效性再作确认，而max-age 数值代表资源保存为缓存的最长时间。\n应用HTTP/1.1 版本的缓存服务器遇到同时存在Expires 首部字段的情况时，会优先处理max-age 指令，而忽略掉Expires 首部字段。而HTTP/1.0 版本的缓存服务器的情况却相反，max-age 指令会被忽略掉。")]),t._v(" "),e("p",[e("strong",[t._v("min-fresh指令")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-206127d6c4935c12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: min-fresh=60 //（单位：秒）")])]),t._v(" "),e("p",[t._v("min-fresh 指令要求缓存服务器返回至少还未过指定时间的缓存资源。\n比如，当指定min-fresh 为60 秒后，过了60 秒的资源都无法作为响应返回了。")]),t._v(" "),e("p",[e("strong",[t._v("max-stale指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: max-stale=3600 //（单位：秒）")])]),t._v(" "),e("p",[t._v("使用max-stale 可指示缓存资源，即使过期也照常接收。\n如果指令未指定参数值，那么无论经过多久，客户端都会接收响应；如果指令中指定了具体数值，那么即使过期，只要仍处于max-stale 指定的时间内，仍旧会被客户端接收。\n"),e("strong",[t._v("only-if-cached指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: only-if-cached")])]),t._v(" "),e("p",[t._v("使用only-if-cached 指令表示客户端仅在缓存服务器本地缓存目标资源的情况下才会要求其返回。换言之，该指令要求缓存服务器不重新加载响应，也不会再次确认资源有效性。若发生请求缓存服务器的本地缓存无响应，则返回状态码504 Gateway Timeout。\n"),e("strong",[t._v("must-revalidate指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: must-revalidate")])]),t._v(" "),e("p",[t._v("使用must-revalidate 指令，代理会向源服务器再次验证即将返回的响应缓存目前是否仍然有效。\n若代理无法连通源服务器再次获取有效资源的话，缓存必须给客户端一条504（Gateway Timeout）状态码。\n另外，使用must-revalidate 指令会忽略请求的max-stale 指令（即使已经在首部使用了max-stale，也不会再有效果）。\n"),e("strong",[t._v("proxy-revalidate指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: proxy-revalidate")])]),t._v(" "),e("p",[t._v("proxy-revalidate 指令要求所有的缓存服务器在接收到客户端带有该指令的请求返回响应之前，必须再次验证缓存的有效性。\n"),e("strong",[t._v("no-transform指令")])]),t._v(" "),e("p",[e("code",[t._v("Cache-Control: no-transform")])]),t._v(" "),e("p",[t._v("使用no-transform 指令规定无论是在请求还是响应中，缓存都不能改变实体主体的媒体类型。这样做可防止缓存或代理压缩图片等类似操作。")]),t._v(" "),e("h4",{attrs:{id:"cache-control-扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-扩展"}},[t._v("#")]),t._v(" Cache-Control 扩展")]),t._v(" "),e("p",[t._v("cache-extension token")]),t._v(" "),e("p",[e("code",[t._v('Cache-Control: private, community="UCI"')])]),t._v(" "),e("p",[t._v("通过 cache-extension 标记（token），可以扩展Cache-Control 首部字段内的指令。\n如上例，Cache-Control 首部字段本身没有community 这个指令。借助extension tokens 实现了该指令的添加。如果缓存服务器不能理community 这个新指令，就会直接忽略。因此，extension tokens 仅对能理解它的缓存服务器来说是有意义的。")]),t._v(" "),e("h3",{attrs:{id:"last-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[t._v("#")]),t._v(" Last-Modified")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-d614e0b635ec075b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("Last-Modified: Wed, 23 May 2012 09:59:55 GMT")])]),t._v(" "),e("p",[t._v("服务器将资源传递给客户端时，会将资源最后更改的时间以“Last-Modified: GMT”的形式加在实体首部上一起返回给客户端。\n当客户端对同样的资源发起同样的请求时，会把该信息附带在请求报文中一并带给服务器去做检查。")]),t._v(" "),e("h4",{attrs:{id:"if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-modified-since"}},[t._v("#")]),t._v(" If-Modified-Since")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-f6990c041841cfc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("如果在If-Modified-Since 字段指定的日期时间后，资源发生了更新，服务器会接受请求")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-64e1bbb040444dce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("If-Modified-Since: Thu, 15 Apr 2004 00:00:00 GMT")])]),t._v(" "),e("p",[t._v("首部字段If-Modified-Since，属附带条件之一，它会告知服务器若If-Modified-Since 字段值早于资源的更新时间，则希望能处理该请求。而在指定If-Modified-Since 字段值的日期时间之后，如果请求的资源都没有过更新，则返回状态码304 Not Modified 的响应。\nIf-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。获取资源的更新日期时间，可通过确认首部字段Last-Modified 来确定。")]),t._v(" "),e("h4",{attrs:{id:"if-unmodified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-unmodified-since"}},[t._v("#")]),t._v(" If-Unmodified-Since")]),t._v(" "),e("p",[e("code",[t._v("If-Unmodified-Since: Thu, 03 Jul 2012 00:00:00 GMT")])]),t._v(" "),e("p",[t._v("首部字段If-Unmodified-Since 和首部字段If-Modified-Since 的作用相反。它的作用的是告知服务器，指定的请求资源只有在字段值内指定的日期时间之后，未发生更新的情况下，才能处理请求。如果在指定日期时间后发生了更新，则以状态码412 Precondition Failed 作为响应返回。")]),t._v(" "),e("p",[e("strong",[t._v("ps:Last-Modified 存在一定问题，如果在服务器上，一个资源被修改了，但其实际内容根本没发生改变，会因为Last-Modified时间匹配不上而返回了整个实体给客户端（即使客户端缓存里有个一模一样的资源）。")])]),t._v(" "),e("h3",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" ETag")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-e8e4f1208281051b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("code",[t._v('ETag: "82e22293907ce725faf67773957acd12"')])]),t._v(" "),e("p",[t._v("首部字段ETag 能告知客户端实体标识。它是一种可将资源以字符串形式做唯一性标识的方式。服务器会为每份资源分配对应的ETag 值。\n另外，当资源更新时，ETag 值也需要更新。生成ETag 值时，并没有统一的算法规则，而仅仅是由服务器来分配。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-39c25b16f7370efa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("资源被缓存时，就会被分配唯一性标识。\n例如，当使用中文版的浏览器访问 http : //www.google.com/ 时，就会返回中文版对应的资源，而使用英文版的浏览器访问时，则会返回英文版对应的资源。\n两者的URI是相同的，所以仅凭URI 指定缓存的资源是相当困难的。若在下载过程中出现连接中断、再连接的情况，都会依照ETag 值来指定资源。")]),t._v(" "),e("h4",{attrs:{id:"强etag-值和弱tag-值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强etag-值和弱tag-值"}},[t._v("#")]),t._v(" 强ETag 值和弱Tag 值")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("强ETag 值\n强ETag 值，不论实体发生多么细微的变化都会改变其值。\n"),e("code",[t._v('ETag: "usagi-1234"')])])]),t._v(" "),e("li",[e("p",[t._v("弱ETag 值\n弱ETag 值只用于提示资源是否相同。只有资源发生了根本改变，产\n生差异时才会改变ETag 值。这时，会在字段值最开始处附加W/。\n"),e("code",[t._v('ETag: W/"usagi-1234"')])])])]),t._v(" "),e("h4",{attrs:{id:"_4-2-if-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-if-match"}},[t._v("#")]),t._v(" 4.2 If-Match")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-b0b9688c6da2da41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"附带条件请求"}}),t._v("\n形如If-xxx 这种样式的请求首部字段，都可称为条件请求。服务器接收到附带条件的请求后，只有判断指定条件为真时，才会执行请求。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-7992f2746e34989e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-20519a333fc1b1b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"只有当If-Match 的字段值跟ETag 值匹配一致时，服务器才会接受请求"}})]),t._v(" "),e("p",[e("code",[t._v('If-Match: "123456"')])]),t._v(" "),e("p",[t._v("首部字段If-Match，属附带条件之一，它会告知服务器匹配资源所用的实体标记（ETag）值。这时的服务器无法使用弱ETag 值。\n服务器会比对If-Match 的字段值和资源的ETag 值，仅当两者一致时，才会执行请求。反之，则返回状态码412 Precondition Failed 的响应。\n还可以使用星号（*）指定If-Match 的字段值。针对这种情况，服务器将会忽略ETag 的值，只要资源存在就处理请求。")]),t._v(" "),e("h4",{attrs:{id:"if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-none-match"}},[t._v("#")]),t._v(" If-None-Match")]),t._v(" "),e("p",[t._v("只有在If-None-Match 的字段值与ETag 值不一致时， 可处理该请求。\n与If-Match 首部字段的作用相反")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-2119483682c70515.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),e("p",[t._v("首部字段If-None-Match 属于附带条件之一。它和首部字段If-Match 作用相反。用于指定If-None-Match 字段值的实体标记（ETag）值与请求资源的ETag 不一致时，它就告知服务器处理该请求。\n在GET 或HEAD 方法中使用首部字段If-None-Match 可获取最新的资源。因此，这与使用首部字段If-Modified-Since 时有些类似。")]),t._v(" "),e("h3",{attrs:{id:"用户刷新-访问行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户刷新-访问行为"}},[t._v("#")]),t._v(" 用户刷新/访问行为")]),t._v(" "),e("h4",{attrs:{id:"在uri输入栏中输入然后回车"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在uri输入栏中输入然后回车"}},[t._v("#")]),t._v(" 在URI输入栏中输入然后回车")]),t._v(" "),e("p",[t._v("不与服务器确认，而是直接使用浏览器缓存的内容。其中响应内容和之前的响应内容一模一样，例如其中的Date时间是上一次响应的时间。")]),t._v(" "),e("h4",{attrs:{id:"f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#f5-点击工具栏中的刷新按钮-右键菜单重新加载"}},[t._v("#")]),t._v(" F5/点击工具栏中的刷新按钮/右键菜单重新加载")]),t._v(" "),e("p",[t._v("F5的作用和直接在URI输入栏中输入然后回车是不一样的，F5会让浏览器无论如何都发一个HTTP Request给Server，即使先前的响应中有Expires头部。")]),t._v(" "),e("h4",{attrs:{id:"ctl-f5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ctl-f5"}},[t._v("#")]),t._v(" Ctl+F5")]),t._v(" "),e("p",[t._v("Ctrl+F5要的是彻底的从Server拿一份新的资源过来，所以不光要发送HTTP request给Server，而且这个请求里面连If-Modified-Since/If-None-Match都没有，这样就逼着Server不能返回304，而是把整个资源原原本本地返回一份，这样，Ctrl+F5引发的传输时间变长了，自然网页Refresh的也慢一些。")]),t._v(" "),e("h3",{attrs:{id:"缓存实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存实践"}},[t._v("#")]),t._v(" 缓存实践")]),t._v(" "),e("h4",{attrs:{id:"expires-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires-cache-control"}},[t._v("#")]),t._v(" Expires / Cache-Control")]),t._v(" "),e("p",[t._v("Cache-Control 是 HTTP1.1 才有的，不适用于 HTTP1.0，而 Expires 既适用于 HTTP1.0，也适用于 HTTP1.1，所以说在大多数情况下同时发送这两个头会是一个更好的选择，当客户端两种头都能解析的时候，会优先使用 Cache-Control。")]),t._v(" "),e("h4",{attrs:{id:"last-modified-etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-etag"}},[t._v("#")]),t._v(" Last-Modified / ETag")]),t._v(" "),e("p",[t._v("二者都是通过某个标识值来请求资源， 如果服务器端的资源没有变化，则自动返回 HTTP 304 （Not Changed）状态码，内容为空，这样就节省了传输数据量。当资源变化后则返回新资源。从而保证不向客户端重复发出资源，也保证当服务器有变化时，客户端能够得到最新的资源。\n其中Last-Modified使用文件最后修改作为文件标识值，它无法处理文件一秒内多次修改的情况，而且只要文件修改了哪怕文件实质内容没有修改，也会重新返回资源内容；ETag作为“被请求变量的实体值”，其完全可以解决Last-Modified头部的问题，但是其计算过程需要耗费服务器资源。")]),t._v(" "),e("h4",{attrs:{id:"from-cache-304"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-cache-304"}},[t._v("#")]),t._v(" from-cache / 304")]),t._v(" "),e("p",[t._v("Expires和Cache-Control都有一个问题就是服务端的修改，如果还在缓存时效里，那么客户端是不会去请求服务端资源的（非刷新），这就存在一个资源版本不符的问题，而强制刷新一定会发起HTTP请求并返回资源内容，无论该内容在这段时间内是否修改过；而Last-Modified和Etag每次请求资源都会发起请求，哪怕是很久都不会有修改的资源，都至少有一次请求响应的消耗。\n对于所有可缓存资源，指定一个Expires或Cache-Control max-age以及一个Last-Modified或ETag至关重要。同时使用前者和后者可以很好的相互适应。\n前者不需要每次都发起一次请求来校验资源时效性，后者保证当资源未出现修改的时候不需要重新发送该资源。而在用户的不同刷新页面行为中，二者的结合也能很好的利用HTTP缓存控制特性，无论是在地址栏输入URI然后输入回车进行访问，还是点击刷新按钮，浏览器都能充分利用缓存内容，避免进行不必要的请求与数据传输。")]),t._v(" "),e("h5",{attrs:{id:"避免304"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免304"}},[t._v("#")]),t._v(" 避免304")]),t._v(" "),e("p",[t._v("做法很简单，就是把可能会更新的资源以版本形式发布，常用的方法是在文件名或参数带上一串md5或时间标记符：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://hm.baidu.com/hm.js?e23800c454aa573c0ccb16b52665ac26\nhttp://tb1.bdstatic.com/tb/_/tbean_safe_ajax_94e7ca2.js\nhttp://img1.gtimg.com/ninja/2/2016/04/ninja145972803357449.jpg\n")])])]),e("p",[t._v("可以看到上面的例子中有不同的做法，有的在URI后面加上了md5参数，有的将md5值作为文件名的一部分，有的将资源放在特性版本的目录中。\n那么在文件没有变动的时候，浏览器不用发起请求直接可以使用缓存文件；而在文件有变化的时候，由于文件版本号的变更，导致文件名变化，请求的url变了，自然文件就更新了。这样能确保客户端能及时从服务器收取到新修改的文件。通过这样的处理，增长了静态资源，特别是图片资源的缓存时间，避免该资源很快过期，客户端频繁向服务端发起资源请求，服务器再返回304响应的情况（有Last-Modified/Etag）。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《图解HTTP》"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://imweb.io/topic/5795dcb6fb312541492eda8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP缓存控制小结"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);