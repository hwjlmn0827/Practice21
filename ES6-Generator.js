function* myGenerator() {
    console.log('start');
    let result = yield 'hello';
    console.log('result', result)
    console.log('continue');
    yield 'world';
    console.log('continue2');
    yield '!';
    return true;
}
let MG = myGenerator() //返回的是指针对象

console.log(MG.next())
console.log(MG.next('dd'))
console.log(MG.next())
console.log(MG.next())

// obj: for..of 
let obj = {
    username: 'zy',
    age: 21
}

obj[Symbol.iterator] = function* myTest() {
    yield this.username
    yield this.age
}

for(let i of obj) {
    console.log(i)
}

console.log(Symbol.iterator)
