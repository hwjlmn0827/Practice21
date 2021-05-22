var data = [];
for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}
data[0]();
data[1]();
data[2]();


var data2 = [];
for (var i = 0; i < 3; i++) {
    data2[i] = (function () {
        console.log(i);
    })(i);
}
data2[0];
data2[1];
data2[2];


var data3 = [];
for (let i = 0; i < 3; i++) {
    data3[i] = (function () {
        console.log(i);
    })(i);
}
data3[0];
data3[1];
data3[2];
// let 具有块级作用域，形成的3个私有作用域都是互不干扰的。

// 应用场景
setTimeout(function (param) {
    alert(param)
}, 1000)

// //通过闭包可以实现传参效果
// function func(param) {
//     return function () {
//         alert(param)
//     }
// }
// var f1 = func(1);
// setTimeout(f1, 1000);