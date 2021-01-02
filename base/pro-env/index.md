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