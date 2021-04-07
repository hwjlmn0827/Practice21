let promise = new Promise((resolve, reject) => {
    // 初始化promise 状态：pending；
    console.log('1')
    // 执行异步操作：ajax setTimeout
    setTimeout(() => {
        console.log('3')
        //异步任务有返回结果，根据异步任务的返回结果修改promise的状态
        let x = 'arg'
        // resolve(x); //修改promise状态: resolve 或者
        let y = 'drg'
        reject(y); //修改promise状态 reject
    }, 1000)
})
// 传参数
promise.then((data) => {
    console.log('yes', data)
}, (err) => {
    console.log('no',err)
})

console.log('2')


// 应用场景 
// 主题和评论（多）分开拿，提升用户体验