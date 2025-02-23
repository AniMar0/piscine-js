function split(str, sep, limit = Number.MAX_VALUE){
    let arr = []
    let char = ''
    if (str.length < sep.length){
        arr.push('')
    }
    if (sep === '') {
        for (let i = 0; i < str.length && arr.length < limit; i++) {
            arr.push(str[i]) 
        }
        return arr;
    }
    for (let i=0; i< str.length; i++){
        if (arr.length >= limit) {
            break;
        }
        if(str.slice(i,i+sep.length) === sep ) {
            arr.push(char)
            i += sep.length-1
            char = ''
 
        } else {
            char += str[i]
        }
    }
    if (char != ''|| str.slice(-sep.length) === sep){
        arr.push(char)
    }
    
    return arr
}


function join(array,jon){
    if(typeof jon == "undefined"){
        return jonn(array,",")
    }else {
        return jonn(array,jon)
    }
}

function jonn(array,jon){
    let str = ""
    for (let index = 0; index < array.length; index++) {
        if(index != array.length-1){
            str += array[index]+jon 
        }else{
            str += array[index]
        }
    }
    return str
}