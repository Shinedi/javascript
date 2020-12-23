### 作用域和闭包
---

#### 题目
---
1. this的不同应用场景，如何取值？
2. 手写bind函数
3. 实际开发中闭包应用场景

#### 作用域
---
1. 全局作用域
2. 函数作用域
3. 块级作用域

#### 自由变量
---
1. 一个变量在当前作用域没有定义,但被使用了
2. 向上级作用域一层层寻找，直到找到为止
3. 如果到全局作用域都没找到，则报错 xxx is not defined

#### 闭包
---
1. 作用域应用的2种情况,有2种表现
    a)、函数作为参数被传递
    b)、函数作为返回值被返回
2. 所有自由变量的查找,是在函数定义的地方，向上级作用域查找,不是在执行的地方！！！
```
function print(fn) {
    const a = 200;
    fn()
}
const a =100;
function fn() {
    console.log(a)
}
print(fn) // 100
```

#### this
---
1. 作为普通函数
2. 使用call apply bind
3. 作为对象方法被调用
4. 在class方法中调用: 代表实例
5. 箭头函数: 取上级作用域的值
*this取什么值，是在执行方法的时候确定的，而不是定义方法的时候确认的*

```
const zhangsan = {
    name: 'zhangsan',
    sayHi(){
        // this 指当前对象
        console.log(this)
    }
    wait(){
        setTimeout(function(){
           // this === window
            console.log(window) // setTimeout触发的 
        }
        )
    }
}
const zhangsan = {
    name: 'zhangsan',
    sayHi(){
        // this 指当前对象
        console.log(this)
    }
    wait(){
        setTimeout(()=>{
           // this 指当前对象
            console.log(window) 
        }
        )
    }
}

class People {
    constructor (name) {
        this.name = name
    }
    sayHi () {
        console.log(`hi,${this.name}`)
    }
}
var zhangsan = new People('zhangsan');
console.log(zhangsan.sayHi())
```

#### 题目解答
---
1. this的不同应用场景，如何取值？

    ```
    普通函数： window
    使用call apply bind: 绑定的对象
    作为对象方法被调用： 对应的对象
    在class方法中调用: 代表实例
    箭头函数: 取上级作用域的值
    ```

2. 手写bind函数
```
function f1 (a, b, c) {
    console.log('this', this);
    console.log(a, b, c)
    return 'this is fn11'
}

// 模拟bind
Function.prototype.bind1= function(){
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    // 获取this(数组第一项)
    const t = args.shift()
    // this对应fn1.bind(...)中的fn1
    const self = this;
    // 返回一个函数
    return function(){
        return self.apply(t, args)
    }
}
const fn2 = f1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res)
```

3. 实际开发中闭包应用场景

    a)、 隐藏数据,只提供API
        
        ```
        function createCathe() {
            const data ={};
            return {
                set: function(key, val) {
                    data[key] = val;
                },
                get: function(key) {
                    return data[key]
                }
            }
        }
        const c = createCathe()
        c.set('a', 100)
        console.log(c.get('a'))  // 只能通过set和get访问data
        ```

        ```
        let i,a; // 全局块级作用域
        for ( i=0; i< 10; i++) {
            a=document.createElement('a');
            a.innerHTML = i + '<br>'
            a.addEventListener('click', function(e){
                e.preventDefault()
                alert(i) // 10
            })
            document.body.appendChild(a)
        }

        let a; 
        for (let i=0; i< 10; i++) { // 块级作用域
            a=document.createElement('a');
            a.innerHTML = i + '<br>'
            a.addEventListener('click', function(e){
                e.preventDefault()
                alert(i) 
            })
            document.body.appendChild(a)
        }
        ```