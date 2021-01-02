function multi(num){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(num*num)
        }, 1000)
    })
}

const a = [1,2,3]
// a.forEach(async item=> {
//     const res = await multi(item);
//     console.log(res)
// })

!(async function(){
    for (let i of a) {
        const res = await multi(i);
        console.log(res)
    }
})()

function test(person){
    person.age = 26;
    person = {
        name: 'yyy',
        age: 30
    }
    return person
}
const p1 = {
    name: 'yck',
    age: 25
}
const p2 = test(p1)
console.log(p1)
console.log(p2)
let timer = null
input1.addEventListener('keyup',function () {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(()=> {
        console.log(input.value)
        timer = null
    }, 500)
})

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