// 数组去重复
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16]

// 1.Set (ES6)
/*let arr = [...new Set(ary)];
console.log(arr)
let brr = Array.from(new Set(ary));
console.log(brr)*/


// 2.拿出一个数和后面所有的数比较,如果有的话
// 2.1 就把当前的移除
// 2.2 用一个新数组
/*let length = ary.length
for (let i = length - 1; i >= 0; i--) {
    let item = ary[i];
    let args = ary.slice(0,i);
    console.log(args + '// ' + item)
    if(args.indexOf(item) > -1) {
        ary.splice(i,1)
    }
}
console.log(ary)*/


// 3.先排序,再相邻比较
// 3.1 正则有重复的只取一个
ary.sort((a, b) => a - b);
str = ary.join('@') + '@';
let reg = /(\d+@)\1*/g;
let newstr = ''
str.replace(reg, (val, group1) => {
    newstr += group1
});
ary = newstr.split("@")
ary.pop()
ary.map(Number)
console.log(ary)
//分组正则 0到多次,重复的都挨在一起捕获了
/*12@12@ 12@
14@ 14@
15@ 15@
16@ 16@
23@23@ 23@
25@25@ 25@*/


// 4.用一个新数组往里拿,如果有重复的就不放进来


// ps: parseFloat map
let xx = '12#';
console.log(parseFloat(xx));
let yy = '12#333';
console.log(parseFloat(yy));
let floatMapTest = [12, 23, 12, 15, 25, 23, 25, 14, 16];
let zz = floatMapTest.map(String)
let zstr = zz.join('#@');
let zary = zstr.split('@').map(x => {
    return parseFloat(x);
})
console.log(zary);


// ps: reduce
console.log('// ps: reduce')
var aryReduce = [1, 2, 3, 4];
var sum = aryReduce.reduce(function (prev, cur, index, arr) {
    console.log(prev, cur, index, 'th loop');
    return prev + cur;
}, []);
console.log(aryReduce, sum);
/*1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10
从index = 1开始 循环
数组为空的时候要设置初始值
*/