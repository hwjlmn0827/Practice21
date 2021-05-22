//1.原型链继承

function Person() {
    this.name = 'hello';
    this.setName = function(name) {
        console.log(this.name);
        return this.name;
    }
}
Person.prototype.getName = function() {
    return this.name;
}

function Child() {
}

Child.prototype = new Person();
var c = new Child();
console.log('prototype',c.getName())

//2. 利用构造函数 call

function Child2() {
    Person.call(this)
}

var c2 = new Child2();
console.log('constructor',c2.setName('xx'));


