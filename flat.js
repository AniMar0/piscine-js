function flat(array,arx){
    if (arx === undefined) arx = 1; 
    if (arx == 0){
        return array
    }
    let result = []
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])){
            result.push(...flat(array[index],arx-1))
        }else{
            result.push(array[index])
        }
    }
    return result
}

console.log(flat([1, [2, [3], [4, [5]]]], Infinity))