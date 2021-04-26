async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();

new Promise((resolve) => {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
});
console.log('script end')

/*script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout*/

/*浏览器是多线程的，js是单线程的，浏览器只给一个线程来渲染js
栈内存来执行代码
Event Queue —— 微任务执行完了再执行宏任务
宏任务：定时器 XHR
微任务：Promise await

1、创建async1
2、创建async2
3、=>"script start"
4、设置定时器（宏任务A）
5、async1() => "async1 start"
   执行async2() 等待返回的结果 （微任务B）
   => "async2"
6、new Promise 立即执行 => "promise1"
   执行resolve() 等待返回的结果 （微任务C）
7、"script end"

主栈第一阶段完成，
查找Event Queue放入主栈再执行 === (EventLoop)

8、"async1 end"
9、"promise2"
10、"setTimeout"
*/