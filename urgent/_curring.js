//1、参数复用,针对重复的参数进行优化
//函数里返回函数

function url_curring(protocol) {
    return function (host, path) {
        return `${protocol}${host}${path}`
    }
}
const url_protocol = url_curring("https")
const uri1 = url_protocol('www.danlaoshi.com', '/zan')
const uri2 = url_protocol('www.danlaoshi.com', '/shou')
const uri3 = url_protocol('www.danlaoshi.com', '/tou')

console.log(uri1)
console.log(uri2)
console.log(uri3)


//2、兼容器的检测,查看浏览器支持addEventListener(大部分) or attachEvent
//立即执行函数 (在非浏览器环境下执行不了)

/*const whichEvent = (function (argument) {
    if (window.addEventListener) {
        return function (element, type, listener, useCapture) {
            element.addEventListener(type, function (e) {
                listener.call(element, e) //规避this的指向问题
            }, useCapture)
        }
    } else if (window.attachEvent) {
        return function (element, type, handler) {
            element.attachEvent('on' + type, function (e) {
                handler.call(element, e) //IE 中默认是冒泡
            })
        }
    }
})()
*/


//3、延迟执行
//add(1)(2)
function add() {
    let args = Array.prototype.slice.call(arguments);
    let inner = function () { //接收第二个括号里的参数
        args.push(...arguments)

        let sum = args.reduce(function (prev, cur) {
            return prev + cur
        });
        return sum;
    }
    return inner;
}

console.log(add(1))
console.log(add(1)(2)) //再加一个括号就不行TypeError了，递归解决需要无数内部函数的问题

//update
function addRecursion() {
    let args = Array.prototype.slice.call(arguments);
    let inner = function () { //接收第二个括号里的参数
        args.push(...arguments)
        return inner; //sum 放在哪里？ :返回的函数经过toString()
    }
    inner.toString = function () { //其实也用了闭包概念
        return args.reduce(function (prev, cur) {
            return prev + cur
        });
    }
    return inner;
}

console.log('addRecursion', addRecursion(1)(2)(3)(4)) //只能在浏览器中隐式返回


//test reduce
let arr = [1, 2, 3, 4, 5, 6, 7]
let sumReduce = arr.reduce(function (prev, cur) {
    return prev + cur
}, 4); //
console.log(sumReduce)


//extend
const nameList1 = [{
    mid: 'dd',
    age: 21
}, {
    mid: 'ee',
    age: 33
}]
const nameList2 = [{
    nid: 'aa',
    age: 1
}, {
    nid: 'bb',
    age: 3
}]
const curring = name => element => element[name]
const name_mid = curring("mid")
const name_nid = curring("nid")
console.log(nameList1.map(name_mid))
console.log(nameList2.map(name_nid))


// how to write one curring? #todo




