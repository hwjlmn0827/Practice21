// 节流 函数在n秒内再次触发就忽略

//模拟一段ajax请求 or 需要防抖的函数 
function ajax(content) {
    console.log(content + '防抖成功');
}

function throttle(fun, delay) {
    let last, deferTimer;
    return function () {
        let now = +new Date()
        // 如果执行时间没超过delay，则清除原定时器，加入新定时器
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(() => {
                last = now
                fun.apply(this, arguments) //
            }, delay)
        // 否则立刻执行
        } else {
            last = now
            fun.apply(this, arguments)
        }
    }
}

let throttleAjax = throttle(ajax, 1000)

let inputc = document.getElementById('throttle')
inputc.addEventListener('keyup', function (e) {
    throttleAjax(e.target.value)
})

// 作者：薄荷前端
// 链接：https://juejin.cn/post/6844903669389885453
// 来源：掘金