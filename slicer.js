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