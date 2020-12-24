/* const p1 = new Promise((resolve, reject) => {

})
console.log('p1', p1)

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('')
    })
})
console.log('p2', p2)
setTimeout(()=>{
    console.log('p2', p2)
})

const p3 = Promise.resolve(100)
console.log('p3', p3)
p3.then(data => {
    console.log('data', data)
}).catch(e=> {
    console.log('p4', e)
})

const p4 = Promise.reject('error')
console.log('p4', p4)
p4.then(data => {
    console.log('data', data)
}).catch(e=> {
    console.log('p4', e)
}) */

/* const p1 = Promise.resolve().then(()=>{
    return 100
})
console.log('p1', p1)
p1.then(()=>{
    console.log('123')
})

const p2 = Promise.resolve().then(()=>{
    throw new Error('error')
}).then(()=>{
    console.log(456)
}).catch(e=>{
    console.log(e)
})
console.log('p2', p2)

const p3 = Promise.reject('my error').catch(err => {
    console.log(err)
})
console.log('p3', p3)
p3.then(()=>{
    console.log(100)
})
const p4 = Promise.reject('my error').catch(err => {
    throw new Error('error')
})
console.log('p4', p4)
p4.then(()=>{
    console.log(200)
}).catch(e=>{
    console.log(e)
}) */
/* 
Promise.resolve().then(()=>{
    console.log(1)
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})

Promise.resolve().then(()=>{
    console.log(1)
    throw new Error('error1')
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
}) */
Promise.resolve().then(()=>{
    console.log(1)
    throw new Error('error1')
}).catch(()=>{
    console.log(2)
}).catch(()=>{
    console.log(3)
})