function trunc(num){
    return Number.length(num)
}

function round(num){
    let isnegative = false
    if (num<0){
        isnegative = true
    }

    if(trunc(num+0.5) == trunc(num+1)){
        result = trunc(num+1)
    }else{
        result = trunc(num)
    }

    if (isnegative){
        return result
    }
    return -result
}


function multiply(a, b) {
    let negative = false
    if (a<0){
        negative = true
    }
    if(b<0&&negative){
        negative = false
    }else if (b<0){
        negative = true
    }

    a = Math.abs(a)
    b = Math.abs(b)

    let result = 0

    for (let i = 0; i < b;i++){
        result += a
    }

    if (negative){
        return -result
    }

    return result
}

function divide(a, b) {
    let result = 0

    let negative = false
    if (a<0){
        negative = true
    }
    if(b<0&&negative){
        negative = false
    }else if (b<0){
        negative = true
    }

    a = Math.abs(a)
    b = Math.abs(b)


    while (a >= b){
        a -= b
        result++
    }

    if (negative){
        return -result
    }

    return result
}

function modulo(a, b) {
   return (a-multiply(divide(a,b),b))
}
console.log(trunc(15.55))
console.log(1555-15.55)