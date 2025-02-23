// function trunc(num) {
//     return num -  modulo(num,1)
// }

function trunc(num) {

    let negative = false
    if (num < 0) {
        negative = true
    }
    num = Math.abs(num)
    let newNum = num


    while (newNum >= 1) {

        if(newNum>= 10000000000){
            newNum -= 10000000000
        }else{
            newNum--
        }
        
    }

    if (negative) {
        return -(num - newNum)
    }
    return num - newNum
}

function round(num) {
    let isnegative = false

    if (num == -0) {
        return -0
    }

    if (num < 0) {
        isnegative = true
    }
    num = Math.abs(num)

    if (isnegative) {
        if (trunc(num + 0.49) == trunc(num + 1)) {
            return -trunc(num + 1)
        } else {
            return -trunc(num)
        }
    } else {
        if (trunc(num + 0.5) == trunc(num + 1)) {
            return trunc(num + 1)
        } else {
            return trunc(num)
        }
    }
}

function floor(num) {
    let isnegative = false

    if (num == -0) {
        return -0
    }
    if (num < 0) {
        isnegative = true
    }
    num = Math.abs(num)


    if (isnegative) {
        if (trunc(num + 0.49) == trunc(num + 1)) {
            return -trunc(num + 1)
        } else {
            return -trunc(num)
        }
    } else {
        return trunc(num)
    }
}

function ceil(num) {
    let isnegative = false

    if (num == -0) {
        return -0
    }
    if (num < 0) {
        isnegative = true
    }
    num = Math.abs(num)


    if (isnegative) {
        if (isFloot(num)) {
            return -trunc(num)
        }
    } else if (isFloot(num)) {
        return trunc(num + 1)
    }
}

function isFloot(num) {
    return modulo(num, 1) != 0
}


console.log(trunc(1000000000000000.95, 1))
console.log((-100000000.95) % 1)