function chunk (arr , num){
    let array = []
    let end = 0

    for (let i = 0 ; i < arr.length ; i += num){
        end = i + num 
        if (end > arr.length){
            end = arr.length
        }
        array.push(arr.slice(i,end))
    }
    return array

}
console.log(chunk(['a', 'num', 'c', 'd'], 2));