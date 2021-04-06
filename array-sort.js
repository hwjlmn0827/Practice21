let arr = [12, 8, 24, 16, 1]

// 冒泡排序
// 比较两个相邻的元素，将值大的元素交换至右端
// N个数字要排序完成，总共进行N-1趟排序
// 每一轮比较后当前最大(升)的放在末尾
function bubbleSort(arr) {
    if (arr.length === 0) {
        return []
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr))


// 选择排序 @Todo
// 每一次从待排序的数据元素中选出最小的一个元素，存放在序列的开头， 以此类推
// 第一次循环比较n-1次，第二次循环比较n-2次，依次类推，最后一个元素不需要比较，因此共进行n- 1次循环，最后一次循环比较1次。
// 因此一共比较1+2+ ... +（n - 2）+（n - 1）次，求和得n2/2 - n/2 ，忽略系数，取最高指数项，该排序的时间复杂度为O(n2)
function selectSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j // 记录最小的缩影
            }
        }
        // 用找到的最小值与默认的做交换(min 与 mowMin交换, 也就是i与minIndex交换)
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}


// 插入排序
// 设索引i之前的为已排过序的， 让arr[i]与之前的数据在一个个比较
// arr[i] 相当于是一个暂时的空位置, 最后的结果是放此轮最大(升)的数
function insertSort(arr) {
    if (arr.length === 0) {
        return []
    }
    for (let i = 1; i < arr.length; i++) {
        // 第二张牌开始抓
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}
console.log(insertSort(arr))



// 快速排序 二分法 @Todo
// 1. 从数组中选择一个元素作为基准点
// 2. 排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
// 3. 最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。
function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let midlen = Math.floor(arr.length / 2) // 取数组长一半
    let midValue = arr.splice(midlen, 1) // 删除，并取出中间值， 相当于抠出中间值
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(midValue, quickSort(right))
}