#### 运行环境
---
#### 网页渲染
---
1. 题目
* 从输入url到渲染出页面的整个过程
* window.onload和DOMContentLoaded区别
 
2. 知识点
* 加载资源的形式
* 加载资源的过程
* 渲染页面的过程

3. 下载资源的形式
* html代码
* 媒体文件(img，视频)
* js,css

4. 加载过程
* DNS解析:域名->IP地址
* 浏览器根据IP地址向服务器发起http请求
* 服务器处理http请求,并返回给浏览器

5. 渲染过程
* 根据html代码生成DOM树
* 根据css代码生成cssom(object model)
* 将DOM tree和cssom整合形成render tree
* 根据Render tree渲染页面
* 遇到`<script>`则暂停渲染,优先加载并执行js代码,完成再继续

6. 为什么把`<link>`标签放在`head`中？
* 要把css代码在dom树生成之前加载完，等到DOM生成好之后，和所有的css整合成一个render树,一步渲然完成,免得将css放在最底部，引起页面上样式突然间变化

7. `<script>`标签放在`body`底部？
* 提升页面渲染速度，因为遇到`<script>`标签，会暂停渲染

```
window.addEventListener('load', function(){
    // 页面的全部资源加载完才会执行,包括图片、视频等

})
window.addEventListener('DOMContentLoaded', function(){
    // DOM渲染完即可执行,此时图片、视频还可能没有加载完
    
})
```

8. 问题解答
* 从输入url到渲染出页面的整个过程
1) 下载资源: 各个类型的资源,下载过程
2）渲染页面:结合html css javascript图片等

* window.onload和DOMContentLoaded区别
1) `window.onload`页面的全部资源加载完才会执行,包括图片、视频等
2) `DOMContentLoaded`DOM渲染完即可执行,此时图片、视频还可能没有加载完


#### 性能优化(综合性问题,没有标准答案)
---
1. 知识点
* 某些细节问题： 防抖节流
* 只关注核心点,针对面试

2. 性能优化原则
* 多使用内存、缓存或其他方法
* 减少cpu计算量,减少网络加载耗时
* 空间换时间

3. 如何入手
* 让加载更快
* 让渲染更快

4. 让加载更快
* 减少资源体积:压缩代码
* 减少访问次数: 合并代码,SSR服务端渲染,缓存
* 使用更快的网络：cdn

5. 让渲染更快
* css放在head,js放在body最下面
* 今早开始执行js,用DOMContendLoaded触发
* 图片懒加载
* 对DOM查询进行缓存(var length = document.getElementByTagName('p').length)
* 频繁DOM操作,合并到一起插入DOM结构
* 节流防抖

6. 缓存
* 静态资源加hash后缀，根据文件内容计算hash
* 文件内容不变，则hash不变，则url不变
* url和文件不变，则会自动触发http缓存机制,返回304

7. SSR
* 服务器端渲染: 将网页和数据一起加载,一起渲染
* 非SSR(前后端分离)：先加载网页,再加载数据,再渲染数据


#### 防抖
```
function debounce (fn, delay){
    let timer = null;
    
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        },delay)
    }
}
```

#### 节流
每delay后再执行一次
```
function throttle(fn, delay) {
    let timer = null
    return function(){
        if (timer) return ;
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
```

#### 安全
---
1. 问题: 常见的web前端攻击方式有哪些？
* xss跨站请求攻击
* xsrf跨站请求伪造

2. xss攻击
* 一个博客网站,其中嵌入`<script>`脚本
* 脚本内容：获取cookie,发送到我的服务器
* 有人查看它，就可以获取到cookie

3. xss预防
* 替换特殊字符,如`<`变为`&lt`,如`>`变为`&gt`
* 前端后端均可做

4. xsrf攻击和预防
* 使用post接口
* 增加验证,例如密码、短信


#### 问题解答
1. 数组slice和splice区别
* splice(剪接),slice（切片）
```
let arr = [1,2,3,4]
const arr1 = arr.slice()
const arr2 = arr.slice(1, 4) // [2,3,4]
const arr3 = arr.slice(2) // [3,4]
const arr4 = arr.slice(-2) // [3,4] 数组的最后两个元素


const spliceRes = arr.splice(1,2,'a','b','c')
const spliceRes = arr.splice(1,2)
const spliceRes = arr.splice(1,0,'a','b','c')
```

2. `[10,20,30].map(parseInt)`// [10,NaN,NaN]
```
// 拆解
[10,20,30].map((num, index) => {
    return parseInt(num, index)
})

```

3. get和post请求
* get请求一般用于查询操作，post请求一般是用户提交操作
* get参数拼接再url上,post放在请求题内
* post可预防csxf

4. call和apply的区别？
参数传递不同,apply是集合的形式传递
* fn.call(this, p1,p2,p3)
* fn.apply(this, arguments)

5. 事件代理（委托）是什么？
利用事件冒泡在父元素上监听子元素

6. 闭包是什么？ 有何特性？有何影响？
* 回顾作用域和自由变量
* 闭包应用场景： 作为参数被传递，作为返回值被返回
* 自由变量的查找，要在函数定义的地方，而不是执行的地方
* 影响：变量会常驻内存，得不到释放

7. 如何阻止事件冒泡和默认行为？
`event.stopPropagation()`
`event.preventDefault()`
8. 查找、添加、删除、移动DOM节点的方法？
* 查找： id、getElementsByClassName、querySelectorAll,p.parentNode
* 添加： appendChild,createElement
* 移动： 首先获取这个节点，再进行插入就可以把这个元素进行移动
* 删除： removechild
9. 如何减少DOM操作
* 缓存DOM查询结果
* 多次DOM操作，合并到一次插入

9. 解释jsonp的原理,为何不是真正的ajax
* 浏览器同源策略（服务端没有同源策略）和跨域

10. 函数声明和函数表达式的区别
```
function a(){} // 函数声明
const fn = function(){}
// 函数声明会在代码执行前进行预加载,而函数表达式不会
```

11. new Object()和Object.create()
{}等同于new Object(),原型是Object.prototype
Object.create(null)没有原型 // Object.create创建空对象，让空对象的__protp__指向传入的这个对象
Object.create({...})可指定原型
12. this.场景题

13. 字符串字母开头,后面字母数字下划线,长度6-30
* const reg =/^[a-zA-Z]\w{5, 29}$/
* /\d{6}/ 邮政编码
* /^[a-z]+$/ 小写英文字母
* /^[a-zA-Z]+$/ 英文字母
* /^\d{4}-\d{1,2}-\d{1,2}$/ 日期格式
* /^[a-zA-Z]\w{5,17}$/ 用户名
* /\d+\.\d+\.\d+\.\d+/

14. 手写字符串trim保证浏览器兼容性
```
String.prototype.trim = function(){
    return this.replace(/^\s+/, '').replace(/\s+$/,'')
}
```

15. 获取数组中最大的值
```
function max(){
    const nums = Array.prototype.slice.call(arguments);
    let max = 0;
    nums.forEach(item=>{
        if (item > max) max = item;
    })
    return max
}
```

16. 如何捕获js中的异常？
* try...catch
* window.onerror = function(){
    // 第一 对于跨域的js,如cdn,不会有详细的报错信息
    // 对于压缩的js,可通过sourcemap查询行号
}

17. 什么是json
* json是一种数据格式，本质是字符串
* json格式和js对象结构一致,对js语言更友好
* window.JSON是一个全局对象:JSON.stringify JSON.parse

18. 获取当前页面的url参数
* 传统方式,查找location.search
`location.search.substr(1)`
* 新API，URLSearchParams
```
function query(name) {
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
```

19. 数组拍平
`Array.prototype.concat.apply([], arr)`
```
function flat(arr) {
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res)
}
```

20. 数组去重
```
function unique(arr){
    const res = [];
    arr.forEach(item => {
        if(res.indexOf(item) < 0){
            res.push(item)
        }
    })
    return res
}
function unique(arr){
    const set = new Set(arr)
    return [...set]
}
```

21. 深拷贝(Object.assign不是深拷贝)

22. requestAnimationFrame

