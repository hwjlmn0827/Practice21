var a = 100
var b = 380
var flag = 0
var i;
for (i = a; i <= b; i++) {
    x = Math.floor(i / 100);
    y = Math.floor((i % 100) / 10);
    z = Math.floor(i % 10);
    console.log(x, y, z)
    if (i == (Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3))) {
        console.log(i);
        flag = 1;
    }
}
if (flag == 0) {
    console.log("no")
}