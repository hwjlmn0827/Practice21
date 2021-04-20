//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize

// String.prototype[@@iterator]()
// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.codePointAt()
// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.startsWith()
// String.fromCharCode()
// String.fromCodePoint()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.lastIndexOf()
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()
// String.prototype.normalize()
// String.prototype.padEnd()
// String.prototype.padStart()
// String.raw()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.split()
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()


//indexOf 
//注意：从0开始计数
var str = "HelloWorld!"
var strx = "ziyi!"

console.log("basic--------------------------")
console.log("prop:length")
console.log(str.length)
//如果找不到字符，[ ] 返回 undefined，而 charAt() 返回空字符串。
//str[0] = "A";             // 不产生错误，但不会工作
console.log(str[8]) //charAt
console.log("toLowerCase");
console.log(str.toLowerCase())
console.log("toUpperCase");
console.log(str.toUpperCase())


console.log("add/delete/trans----------------")
//return array
console.log("split");
console.log(str.split('')) //字符串转数组
console.log(str.split("o"))

//multiple parameters or '+'
console.log("concat");
console.log(str.concat(" dd ",strx, 'have offer in hand '))
console.log("dd ".concat(str))

// replace(" ",'') 
console.log("trim");
var stry = str.concat('  ')
console.log(str.trim())

//para: repeat time
console.log("repeat")
console.log(str.repeat(6))


console.log("find--------------------------")
console.log("indexOf");
console.log(str.indexOf('e'));
console.log(str.indexOf('e', 0));

console.log("search")
console.log(str.search('e'))

console.log("lastIndexOf");
console.log(str.lastIndexOf('d'));
console.log(str.lastIndexOf('world')); //6
console.log(str.lastIndexOf('or', 4)); //为什么-1?

//如果找不到，返回“”
console.log("charAt");
console.log(str.charAt(9))
console.log(str.charAt(20))

console.log("includes");
console.log(str.includes("H"))

console.log("startsWith");
console.log(str.startsWith("H"))

console.log("endsWith");
console.log(str.endsWith("!"))


console.log("cut----------------------------")
//不包括第二个参数,不会改变原字符串
console.log("substring");
console.log(str.substring(3,6))

//para1: from ; para2: length
console.log("substr");
console.log(str.substr(1)) 
console.log(str.substr(1,2)) // 从第一个开始，截2

//para1: from; para2: to 
//can be negative num
console.log("slice");
console.log(str.slice(1,-2))
console.log(str.slice(-9,-2)) //lloWorl

console.log("reg---------------------------")
//para1:tobe replace; para2: to replace
//only replace the first one
console.log("replace");
console.log(str.replace('o','xxx'))
console.log(str.replace(/o/gi,'yyy'))

//only search the first
console.log("search");
console.log(str.search(/d/g))

//return all matched as array
console.log("match");
console.log(str.match(/[a-z]/g))
console.log(str.match(/\w+/i))
console.log(str.match(/(o)/g))
console.log(str.match(/(oH)/g))


