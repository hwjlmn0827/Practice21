// 递：将问题拆分为子问题再解决
// 归：最小的子问题解决后return 临界条件

// 输入一个正整数n，输出n!的值。其中n!=123*…*n,即求阶乘

function factorial(argument) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

