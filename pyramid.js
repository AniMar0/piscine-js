const pyramid = (a, b) => {
    let res = ""
    let count = 0
    b = Math.abs(b)
    for (let i = 1 ; i <= b ; i++) {
        for (let j = 1 ; j <= (b * 2) - 1 ; j++) {
            if (j < b - count) {
                res += " ".repeat(a.length)
            } else if (j > b + count){
                continue
            } else {
                res += a
            }
        }
        if (i != b) {
            res += "\n"
        }
        count++
    } 
    return res
}
 