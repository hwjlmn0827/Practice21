/*
1. 变量提升
4的只声明不赋值
Foo = AAAFFF000
getName = 5  
*/
function Foo(argument) {
    getName = function () {
        console.log(1);
    };
    return this;
}

Foo.getName = function () {
    console.log(2);
}

Foo.prototype.getName = function () {
    console.log(3);
}

var getName = function getName(argument) {
    console.log(4);
}

function getName(argument) {
    console.log(5);
}

Foo.getName(); //2
getName(); //4
Foo().getName(); //1
//先普通函数执行Foo() 修改了全局的getName，return了全局window 
getName(); //1
new Foo.getName(); //Foo.getName => new  //2
new Foo().getName(); //先new 拿到原型上的getName =>3
//JS运算符的优先顺序 有/无参数new
new new Foo().getName(); // 3



