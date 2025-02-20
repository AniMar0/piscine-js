function isPositive(number){
    if (number<=0){
        return false
    }else{
        return true
    }
}

function abs(number){

    if (number == 0) {
        return 0
    }
    
    if (isPositive(number)){
        return number
    }else{
        return -number
    }
}


console.log(abs(-0))