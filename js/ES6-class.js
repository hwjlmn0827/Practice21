class Person {
    // 都放在实例对象的原型上
    // 构造方法
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    // 一般方法
    showName() {
        console.log(this.name)
    }
    showAge() {
        console.log(this.age)
    }
    // showAge: function() {
    //     // err
    // }
}

//  _proto_(child) = constructor & _proto_(father)
class Student extends Person {
    constructor(name, age, score) {
        // 调用父类的构造方法, 别玩了给
        super(name, age)
        this.score = score
    }
    // 子类重写父类的方法
    showName() {
        console.log('child',this.name)
    }
}

let obj = new Student('zy', 21, 90);
obj.showName()
console.log(obj)