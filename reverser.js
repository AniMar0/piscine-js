function reverse(arr) {
    let result1 = []
    let result2 = ""

    for (let i = arr.length - 1; i >= 0; i--) {
        if (Array.isArray(arr)) {
            result1.push(arr[i])
        } else {
            result2 += arr[i]
        }
    }

    if (Array.isArray(arr)) {
        return result1
    }
    return result2
}


let arr = ['one', 'two', 'three']
let str = "zakii"

console.log(reverse(arr))
console.log(reverse(str))
console.log((arr))