### JS异步进阶
---

#### 主要内容
---
* event loop
* promise进阶
* async/await
* 宏任务/微任务

#### 异步面试题
---
* 请描述event-loop(事件循环、事件轮询)的机制，可画图
* 什么是宏任务和微任务,有什么区别？
* promise有哪几种状态，有什么区别

#### event loop(事件循环/事件轮询)
---
1. 为什么要引入

* js是单线程
* 异步要基于回调来实现
* event loop就是异步回调的实现原理

2. js如何执行？
* 从前到后，一行一行执行
* 如果某一行执行报错,则停止下面代码的执行
* 先把同步代码执行完,再执行异步

```
console.log('Hi');
setTimeout(function(){
    console.log('cb1')
}, 5000)
console.log('bye')
```

3. 总结

* 同步代码,一行一行放在Call Stack中执行
* 遇到异步,会先'记录'下，等待时机(定时、网络请求)
* 时机一到，就移动到callback quene
* 如call stack为空（即同步代码执行完），Event loop开始工作
* 轮询查找Callback quene,如有则移动到call stack执行
* 然后继续轮询查找（永动机一样）





