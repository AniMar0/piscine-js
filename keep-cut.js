function cutFirst(str){
    return slice(str,2)
}

function cutLast(str){
    return slice(str,0,-2)
}

function cutFirstLast(str){
    return cutFirst(cutLast(str))
}

function keepFirst(str){
    return slice(str,0,2)
}

function keepLast(str){
    return slice(str,-2)
}

function keepFirstLast(str){
    if (str.length < 5){
        return str
    }
    return keepFirst(str)+ keepLast(str)
}

function slice(arr,from,to){
    if (typeof from !== "number") {
        from = 0
    }
    if (typeof to !== "number") {
        to = arr.length
    }

    if (from<0){
        from = arr.length + from
    }
    if (to<0){
        to = arr.length + to
    }

    let result = []

    for (let i = from;i<to;i++){
        result.push(arr[i])
    }
    if(typeof arr === "string"){
        return result.join('')
    }
    return result
}


console.log(cutFirst('abcdef'))
console.log(cutFirst('a'))

console.log(cutLast('abcdef'))
console.log(cutLast('a'))

console.log(cutFirstLast('abcdef'))
console.log(cutFirstLast('af'))
console.log(cutFirstLast('afd'))
console.log(cutFirstLast('yoafdyo'))

console.log(keepFirst('abcdef'))
console.log(keepFirst('a'))

console.log(keepLast('abcdef'))
console.log(keepLast('a'))

console.log(keepFirstLast('abcdef'))
console.log(keepFirstLast('af'))
console.log(keepFirstLast('afd'))
console.log(keepFirstLast('yoafdyo'))
