function sign(num) {
    if (num == 0) {
        return 0
    } else if (num < 0) {
        return -1
    } else {
        return 1
    }
}

function sameSign(num1, num2) {
    if (sign(num1) == sign(num2)) {
        return true
    } else {
        return false
    }
}

console.log(sameSign(-10, -1))