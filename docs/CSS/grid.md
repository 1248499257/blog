# Grid 布局

## 简介
Grid布局又叫做网格布局，顾名思义是一种二维网格的布局方式（Flex可以理解为一维布局），Grid的强大让人兴奋！

## 兼容性
提到Grid布局可能很多人会联想到它的兼容性问题，但是截止至2017年3月，已经有许多浏览器对Grid提供了支持，而且无需加浏览器前缀。

## 基本概念 
```css
Contaniner： 网格容器，当我们设置 display:grid 就将一个容器变成了网格容器。
	
Item：网格项，在我们设置的网格容器中的每一个子元素都是网格项
	 
Line：网格线，就是网格之间的分界线
	 
Track：网格轨道，两条相邻的网格线之间的空间，也就是网格的行或者列
	 
Cell：网格单元，就是网格里面的每个小容器
	 
Area：网格区域，四条网格线包围起来的区域
```


## 基本用法
```css
grid-template-columns: 将网格划分成多少列（120px 120px 120px）

template-rows: 将网格划分成多少行（50px 50px）
```
## 最后
markdown放图片太麻烦（懒），直接点击[grid](https://blog.csdn.net/qq_43516152/article/details/97168941)看完整篇吧~