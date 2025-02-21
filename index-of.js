function indexOf(arr, value, index) {
    if (typeof index !== "number") {
        index = 0
    }

    for (let i = index; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }

    return -1
}


function lastIndexOf(arr, value, index) {
    let result

    if (typeof index !== "number") {
        index = arr.length - 1
    }
    for (let i = index; i >= 0; i--) {
        if (arr[i] == value) {
            return i
        }
    }

    if (typeof result === "number") {
        return result
    }

    return -1
}

function includes(arr, value, index) {
    return indexOf(arr, value, index) !== -1
}


console.log(lastIndexOf([0, 0, "t", "t"], "t", 3))