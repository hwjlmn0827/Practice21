var x = 'apple'
var y = 'apple'

function Fn() {
    if (x.length == y.length) {
        return Number(x == y)
    } else {
        var longer = x.length > y.length ? x : y;
        var shorter = x.length < y.length ? x : y;
        for (var i = x.length - 1; i >= 0; i--) {
            if (y == x.replace(x[i], '')) {
                return 1;
            }
        }
        return 0;
    }
}
console.log(Fn())