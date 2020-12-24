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