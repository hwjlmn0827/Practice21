// var a = ?

//solution 1 rewrite toString / valueOf
var a = {
    i: 0,
    toString() {
        return ++this.i;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('A ok')
}

//solution 2 defineProperty 数据执行
var b = 0
// 只能在浏览器中用全局对象window来使用
Object.defineProperty(window, 'b', {
    i = 1
    get() {
        return ++i;
        //不能++b 会一直调用get()，死循环就溢出
    }
})

if (b == 1 && b == 2 && b == 3) {
    console.log('B ok')
}

var c = [1, 2, 3]
c.toString = c.shift; //拿出第一个值
if (c == 1 && c == 2 && c == 3) {
    console.log('B ok')
}