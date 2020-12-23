### 同步和异步
---
1. 同步和异步的区别？
2. 手写用promise加载一张图片？
3. 前端使用异步的场景有哪些？

### 知识点
---
1. 单线程和异步
2. 应用场景
3. callback hell 和promise

### 单线程和异步
---
* js是单线程语言，只能同时做一件事儿
* 浏览器和nodejs已支持js启动进程,如web worker
* JS和DOM渲染共用一个线程,因为JS可修改DOM结构

* 遇到等待(网络请求,定时任务)不能卡住
* 需要异步
* callback回调函数

* 基于js是单线程语言
* 异步不会阻塞代码执行
* 同步会阻塞代码执行

### 异步应用场景
---
* 网络请求, 如ajax图片加载
* 定时任务，如setTimeout

```
console.log('start');
let img = document.createElement('img');
img.onload = function(){
    console.log('loaded')
}
img.src = 'xx.png';
console.log('end')
```

### callback hell 和promise

* 语法
```
function getData(url) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url,
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}


```

### 问题解答
---

1. 同步和异步的区别？
    * 基于js是单线程语言
    * 异步不会阻塞代码执行
    * 同步会阻塞代码执行 
2. 手写用promise加载一张图片？
    ```
    const url = 'https://img2.sycdn.imooc.com/54586887000147cc02200220-140-140.jpg'
    const url2 = 'https://img2.sycdn.imooc.com/54586887000147cc02200220-140-140.jpg'

    function loadImg(src){
        return new Promise((resolve, reject)=> {
            const img = document.createElement('img');
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error('图片加载失败')
                reject(img)
            }
            img.src = src
        })
    }

    loadImg(url).then(img1 => {
        console.log(img1.width)
        return img1; // 普通对象
    }).then(img1 => {
        console.log(img1.height) 
        return loadImg(url2)  // promise实例
    }).then(img2 => {
        console.log(img2.height) 
    }).catch(err => {
        console.log(err)
    })
    ```
3. 前端使用异步的场景有哪些？

* 网络请求, 如ajax图片加载
* 定时任务，如setTimeout

### 小结
---
* 单线程和异步,异步和同步的区别
* 前端异步的应用场景:网络请求和定时任务
* Promise解决callback hell