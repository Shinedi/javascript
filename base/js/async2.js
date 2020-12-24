async function fn1 () {
    return 100 //相当于return Promise.resolve(200)
    
}

const res1 = fn1() // 执行async函数，返回的是一个promise对象
console.log('res1',res1)
res1.then((data)=>{
    console.log(data) // 200
})

!(async function(){
    const p1 = Promise.resolve(300)
    const data = await p1; // await 相当于 Promise then
    console.log('data', data)
})

async function async1(){
    console.log('async1 start') //2
    await async2()
    // await 后面的，都可以看做是callback里的内容，即异步
    console.log('async1 end') // 5
}

async function async2(){
    console.log('async2') // 3
}
console.log('script start') // 1
async1()
console.log('script end') // 4