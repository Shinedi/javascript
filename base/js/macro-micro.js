// console.log(100) // 1
// setTimeout(()=>{
//     console.log(200) //4
// })
// Promise.resolve().then(()=>{
//     console.log(300) // 3
// })
// console.log(400) //2


/* Promise.resolve().then(()=>{
    console.log('promise')
    alert('promise then')
})

setTimeout(()=>{
    console.log('setTimeout')
    alert('setTimeout')
}) */

async function async1(){
    console.log('async1 start') // 2
    await async2()
    // await 后面的都做为回调内容 - 微任务
    console.log('async1 end') // 6
}
async function async2(){
    console.log('async2') // 3
}

console.log('script start') // 1
setTimeout(function(){
    console.log('setTimeout') //宏任务 // 8
}, 0)

async1()
// 初始化Promise时,传入的函数会被立即执行
new Promise(function (resolve) {
    console.log('promise1') // 4
    resolve()
}).then(function(){ // 异步微任务
    console.log('promise2') //7
})
console.log('script end') // 5
// 同步代码执行完毕(call stack被清空)
// 执行微任务
// 尝试触发Dom渲染
// 触发event loop,执行宏任务