
var parent = function(name, age) {
    this.name = name;
    this.age = age;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
};

var newMethod = function (Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    // 2.将this和调用参数传给构造器执行
    Parent.apply(child, rest);
    // 3.返回第一步的对象
    return child;
};

const child = newMethod(Parent, 'echo', 26);
child.sayName()

child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
