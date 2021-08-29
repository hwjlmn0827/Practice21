//定义检测数组类型的功能函数
function checkType(target) {
    // Object.prototype.toString.call() =>  [object array] slice 第一个参数包含，第二个不包含
    return Object.prototype.toString.call(target).slice(8, -1) 
}

//实现深度克隆 obj / arr
function clone(target) {
    let result, targetType = checkType(target);
    if (targetType === 'Object') {
        result = {};
    } else if (targetType === 'Array') {
        result = [];
    } else {
        // 基本上是基本数据类型
        return target;
    }

    // in in in in
    for (let i in target) {
        let val = target[i]
        //判断目标结构中是否嵌套了对象/数组
        if (checkType(val) === 'Object' || checkType(val) === 'Array') {
            //递归
            result[i] = clone(val);
        } else { //获取到的是基本数据类型/函数
            result[i] = val;
        }
    }
    
    return result;
}



let arr1 = [1, 2, {
    username: 'zy',
    age: 21
}]
console.log('arr1 before', arr1)
let arr2 = clone(arr1)
arr2[2].username = 'zzxz'
console.log('after', arr1, arr2)