// 防抖 函数在n秒内再次触发则重新计时


//模拟一段ajax请求 or 需要防抖的函数 

function ajax(content) {
    console.log(content + '防抖成功');
}

function debounce(fn) { // fn 需要防抖的函数
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { 
            fn.call(this, arguments); // ??? 此时this在这干啥的, 为了拿参数的
        }, 500);
    };
}


var inp = document.getElementById('inp');

inp.addEventListener('input', debounce(ajax)); // 防抖