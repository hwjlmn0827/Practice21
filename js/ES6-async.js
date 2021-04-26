async function foo() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
        // setTimeout(function () {
        //     resolve()
        // }, 2000)
    })
}

async function test() {
    console.log('start',new Date().toTimeString());
    await foo();
    console.log('end',new Date().toTimeString());
}

test()

// test return

function test2() {
    return 'test2';
}

async function asyncPrint() {
    let res1 = await test2();
    let res2 = await Promise.resolve() //undefined
    let res3 = await Promise.resolve('return')
    let res4 = await Promise.reject('return') // 直接报错漂红
    console.log('res1', res1);
    console.log('res2', res2);
    console.log('res3', res3);
}

asyncPrint()

// use 网易公开课例子 不能执行
/*function getNews(url) {
    // 异步操作
   $.ajax({
    method: 'GET',
    url:'',
    success: data => resolve(data),
    error: error => reject(error)
    error: error => resolve(false)
   }) 
}

async function sendXML() {
    let result1 = await getNews('url1')
    if(!result1) {}
    //resolve 传来的值可以用
    let result2 = await getNews('url2' + result1.id)
}

*/


