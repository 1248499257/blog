# 原型相关概念

## Prototype
JavaScript 中的对象有一个特殊的 [[Prototype]] 内置属性，其实就是对于其他对象的引用。几乎所有的对象在创建时 [[Prototype]] 属性都会被赋予一个非空的值。

思考下面的代码：
```js
var myObject = { a:2 };

myObject.a; // 2
```
当你试图引用对象的属性时会触发原型[[Get]] 操作，比如 myObject.a。对于默认的 [[Get]] 操作来说，第一步是检查对象本身是否有这个属性，如果有的话就使用它。但是如果 **a** 不在 myObject 中，就需要使用对象的 [[Prototype]] 链了。

我们换种写法：
```js
var myObject = {};

var anotherObject = { a:2 };

// 创建一个关联到 anotherObject 的对象
var myObject = Object.create( anotherObject );

myObject.a; // 2

```
现在 myObject 对象的 [[Prototype]] 关联到了 anotherObject。显然 myObject.a 并不存在， 但是尽管如此，属性访问仍然成功地（在 anotherObject 中）找到了值 2。

但是，如果 anotherObject 中也找不到 a 并且 [[Prototype]] 链不为空的话，就会继续查找下去。

这个过程会持续到找到匹配的属性名或者查找完整条 [[Prototype]] 链。如果是后者的话， [[Get]] 操作的返回值是 undefined。

因此，当你通过各种语法进行属性查找时都会查找 [[Prototype]] 链，直到找到属性或者 查找完整条原型链。

**.toString()、valueOf() 和其他一些通用的功能 都存在于 Object.prototype 对象上，因此语言中所有的对象都可以使用它们。**

## 总结下Prototype

1. 所有的函数数据类型都天生自带一个属性：prototype(原型)，这个属性的值是一个队形，浏览器会默认给它开辟一个堆内存。

2. 在浏览器给prototype 开辟的堆内存中有一个天生自带的属性：constructor，这个属性存储的值是当前函数本身。

3. 每一个对象都有一个 __proto__ 的属性，这个属性指向当前实例所属类的prototype（如果不能确定它是谁的实例，都是Object的实例）。

4. 基类Object的原型上的 __proto__ 指向null，因为到最底层类，如果要指向也是指向本身，没意义。

5. 原型链是基于 __proto__ 向上查找的机制。当我们操作实例的某个属性或者方法的时候，首先找自己空间中私有的属性或者方法。
    * 结果1: 找到了，则结束查找，使用自己私有的即可。
    * 结果2: 没有找到，则基于__proto__所属类的prototype，如果找到就用这个共有的，如果没找到，基于原型上的__proto__继续向上查找，一直找到Object.prototype的原型为止，如果在没有，操作的属性或者方法不存在。

## ES6中的class

class的语法解决了典型原型风格代码中许多显而易见的（语法）问题和缺点，举个例子：
```js
class Widget {
    constructor(width,height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
        }
        render($where){
            if (this.$elem) {
                this.$elem.css( {
                    width: this.width + "px",
                    height: this.height + "px"
                } ).appendTo( $where );
            }
        } }

 class Button extends Widget {
     constructor(width,height,label) {
         super( width, height );
         this.label = label || "Default";
         this.$elem = $( "<button>" ).text( this.label );
        }
         render($where) {
             super( $where );
             this.$elem.click( this.onClick.bind( this ) );
        }
        onClick(evt) {
            console.log( "Button '" + this.label + "' clicked!" );
        }  }
```
这个例子是想创建一个自定义的控件 **button**，假如使用prototype语法的话看起来会非常杂乱无章（这里就不作展示）。

### class的优点

1. 不再引用杂乱的 .prototype 了。

2. Button 声 明 时 直 接“ 继 承 ” 了 Widget， 不 再 需 要 通 过 Object.create(..) 来 替 换 .prototype 对象，也不需要设置 .__proto__  或者 Object.setPrototypeOf(..)。

3. 可以通过 super(..) 来实现相对多态，这样任何方法都可以引用原型链上层的同名方法。

4. class 字面语法不能声明属性（只能声明方法）。看起来这是一种限制，但是它会排除掉许多不好的情况，如果没有这种限制的话，原型链末端的“实例”可能会意外地获取其他地方的属性（这些属性隐式被所有“实例”所“共享”）。所以，class 语法实际上可以帮助你避免犯错。

5. 可以通过 extends 很自然地扩展对象（子）类型，甚至是内置的对象（子）类型，比如 Array 或 RegExp。没有 class ..extends 语法时，想实现这一点是非常困难的，基本上只有框架的作者才能搞清楚这一点。但是现在可以轻而易举地做到！

### class的陷阱

class 语法其实并没有解决所有的问题，在 JavaScript 中使用“类”设计模式仍然存在许多深层问题。

首先，你可能会认为 ES6 的 class 语法是向 JavaScript 中引入了一种新的“类”机制，其实不是这样。class 基本上只是现有 [[Prototype]]（委托！）机制的一种语法糖。也就是说，class 并不会像传统面向类的语言一样在声明时静态复制所有行为。如果你 （有意或无意）修改或者替换了父“类”中的一个方法，那子“类”和所有实例都会受到 影响，因为它们在定义时并没有进行复制，只是使用基于 [[Prototype]] 的实时委托。
