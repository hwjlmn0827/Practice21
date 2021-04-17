//去重
const str = 'aaaabbbbccccadfyabfnsldnfas;';

function noRepeat(str) {
    let set = new Set(str.split(''));
    let arr = Array.from(set);
    return arr.join('');
}
console.log(noRepeat(str))

function noRepeat2(str) {
    //init-- prev:[],cur:str[0]
    return str.split('').reduce((prev, cur) => {
        prev.indexOf(cur) < 0 && prev.push(cur);
        return prev;
    }, []).join('')
}
console.log(noRepeat2(str))

//反转
//1. array reverse
function reverse(str) {
    return str.split('').reverse().join('')
}
console.log(reverse(str))

function reverse2(str) {
    return [...str].reverse().join('')
}
console.log(reverse2(str))

//2. 两端交换
function reverse3(str) {
    let len = str.length
    let newstr = ""
    for (var i = len - 1; i >= 0; i--) {
        newstr += str.charAt(i);
    }
    return newstr;
}
console.log(reverse3(str))


