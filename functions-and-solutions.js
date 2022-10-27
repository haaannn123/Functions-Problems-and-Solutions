console.log('hello there')

// Array Sum //
// Write a function sumArray(arr) that accepts an array as an arg. The function
// should return the total sum of all values in the array.
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        sum += ele
    }
    return sum
}

console.log(sumArray([4, 3, -1, 10])) // 16
console.log(sumArray([6, 7, 2])) // 15
console.log(sumArray([])) // 0

// Avg Val //
// Write a function avgVal(arr) that accepts an array as an arg. The function
// should return the average of all values in the array. If the array is empty,
// it should return null.
function avgVal(arr) {
    let sum = 0
    if (arr.length === 0) return null
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        sum += ele
    }
    return sum / arr.length
}

console.log(avgVal([5, 10])) // 7.5
console.log(avgVal([3, 7, 2, 1, 2])) // 3
console.log(avgVal([])) // null

// My Index Of Recall //
// Write a function myIndexOf(arr, target) that takes in an array and target
// value as args. The function should return the first index where the target is
// found in the array. If the target is not found, it should return -1. Solve
// this without using Array.indexOf.
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        if (ele === target) {
            return i
        }
    }
    return -1
}

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')) // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')) // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')) // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)) // 0
console.log(myIndexOf([43, -7, 11, 13], 1)) // -1

// Tripler //
// Write a function tripler(nums) that takes in an array as an arg. The function
// should return a new array containing three times every number of the original
// array.
function tripler(nums) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        newArr.push(ele * 3)
    }
    return newArr
}

console.log(tripler([2, 7, 4])) // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])) // [ -15, 30, 0, 33 ]
