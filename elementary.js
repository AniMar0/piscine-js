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

