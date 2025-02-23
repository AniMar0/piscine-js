const nasa = (num) => {
    let str = ""
    for (let i = 1 ; i <= num ; i++) {
        if (i % 3 == 0 && i % 5 == 0)  {
            if (i != num) {
                str += "NASA" + " "
            }else{
                str += "NASA" 
            }
        } else if (i % 3 == 0) {
            if (i != num) {
                str += "NA" + " "
            }else{
                str += "NA" 
            }
        } else if (i % 5 ==0) {
            if (i != num) {
                str += "SA" +" "
            }else{
                str += "SA" 
            }
        } else {
            if (i != num) {
                str += i +" "
            }else{
                str += i 
            }
        }
    }
    return str



    
}