//多维数组扁平化

var arr = [1, [2, [3, 4, [5]]]];

// 1. flat ES6
arr = arr.flat(1);
console.log(arr);
arr = arr.flat(3);
console.log(arr);
arr = arr.flat(Infinity);
console.log(arr);

// 2. 字符串toString
str = arr.toString();
arr = str.split(',').map(Number)
console.log(arr);

// 3. 字符串Json 去掉中括号
arr = JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(i => parseFloat(i))
console.log(arr);

// 4. 循环验证是否为数组 基于数组的some方法
while(arr.some(item => Array.isArray(item))) {
    arr = [].contat(...arr);
}

console.log(arr);