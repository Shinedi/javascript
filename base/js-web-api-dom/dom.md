#### 从JS基础知识到js web Api
---
* js基础知识，规定语法（ECMA 262标准）
* js web api,网页的操作API(w3c标准)
* 前者是后者的基础，两者结合才能实际应用

1. 内容
* DOM
* BOM
* 事件绑定
* ajax
* 存储

2. DOM操作（Domcument Object Model）

3. 题目
* DOM 是哪种数据结构
* DOM操作的常用API
* attr和property的区别
* 一次性插入多个DOM节点，考虑性能

4. 知识点
* DOM本质: 一棵树
* DOM节点操作
* DOM结构操作
* DOM性能

5. DOM节点操作
* 获取dom节点: id、classname、tagname、querySelectorAll()
* property和attribute
    1) property：修改对象属性，不会体现到html结构中($p.style.width)
    2）attribute: 修改html属性，会改变html结构（getAttribute(),setAttribute()）
    3）两者都有可能引起DOM渲染
    