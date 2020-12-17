/* function MathHandle(a, b) {
    this.x=a;
    this.y=b;
}
MathHandle.prototype.add = function() {
    return this.x + this.y
}

var m = new MathHandle(1,2)

console.log(m.add()) */

/* function Animal () {
    this.eat = function () {
        console.log('Animal eat')
    }
}

function Dog () {
    this.bark = function () {
        console.log('Dog bark')
    }
}
// 绑定原型，实现继承
Dog.prototype = new Animal()
const hashiqi = new Dog();

hashiqi.eat()
hashiqi.bark() */

/* class Animal {
    constructor (name) {
        debugger
        this.name = name
    }
    eat () {
        console.log(this.name + ' eat')
    }
}

class Dog extends Animal {
    constructor (name) {
        debugger
        super(name)
        this.name = name
    }
    bark () {
        console.log(`${this.name} dark`)
    }
}

const dog = new Dog('哈士奇')
dog.bark()
dog.eat() */

/* function loadImg (src, callback, fail) {
    var img = document.createElement('img');
    img.onload = function() {
        callback(img)
    }  
    img.onerror = function() {
        fail()
    }
    img.src=src
}

var src = 'https://www.imooc.com/static/img/index/logo2020.png'
loadImg(src, function(img){
    console.log(img)
}, function(){
    console.log('error')
}) */

function loadImg (src) {
    return new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function() {
            resolve(img)
        }  
        img.onerror = function() {
            reject()
        }
        img.src=src
    })
}

var src = 'https://www.imooc.com/static/img/index/logo2020.png';
loadImg(src).then(function (img) {
    console.log(img)
    return img
}).then(function (img ) {
    console.log(img.height)
})

var obj = {a:100, b:200}
for(var item in obj) {
    console.log(item);
}
console.log('item', item);
