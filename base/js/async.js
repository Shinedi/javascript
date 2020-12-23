// console.log(100)
// setTimeout(function() {
//     console.log(200)
// })
// console.log(300)

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