const obj = {
    name: 'ziyi',
    // getName() {
    //     return this.name;
    // }
    // 要做的就是把getName() 放到obj中去
};

function getName(a, b, c) {
    console.log(this.name);
    console.log(a, b, c);
}

// getName.call(obj,undefined)
// getName.apply(obj,[])
// var bindFn = getName.bind(obj)
// bindFn()


/*1 将myCall方法挂在函数原型上
2 将getName方法挂在对象obj上 这样才能在执行的时候改变this的指向
3 执行 
4 删除(不能改变原对象)*/


Function.prototype.myCall = function () {
    let [obj, ...args] = Array.from(arguments)
    obj.fn = this;
    let res = obj.fn(...args)
    delete obj.fn;
    return res;
}
console.log('myCall')
getName.myCall(obj, 'dd', 2, 3)


Function.prototype.myApply = function () {
    let [obj, args] = Array.from(arguments)
    obj.fn = this;
    let res = obj.fn(...args)
    delete obj.fn;
    return res;
}
console.log('myApply')
getName.myApply(obj, ['dd', 2, 3])


Function.prototype.myBind = function() {
    let [thisArg] = [...arguments];
    if(!thisArg) {
        thisArg = typeof window === 'undefined' ? global : window;
    }
    let that = this;
    return function() {
        let args = arguments;
        if(!thisArg.fn) { // 防止第二次调用的时候找不到
            thisArg.fn = that;
        }
        let res = thisArg.fn(...args);
        delete thisArg.fn;
        return res;
    }
}
console.log('myBind') //undefined 是name没有取到
getName.myBind(obj)('dd', 2, 3)




