function repeat(str,num){
    let newStr = ""
    for(let i = 0;i<num;i++){
        newStr += str
    }
    return newStr
}

console.log(repeat("za",0))