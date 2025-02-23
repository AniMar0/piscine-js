const RNA = (str) => {
    let result = ""
    for (let char of str) {
        if (char == 'G') {
            result += 'C'
        } else if (char == 'C') {
            result += 'G'
        } else if (char == 'T') {
            result += 'A'
        } else if (char == 'A') {
            result += 'U'
        } else {
            result += char
        }
    }
    return result
}

const DNA = (str) => {
    let result = ""
    for (let char of str) {
        if (char == 'G') {
            result += 'C'
        } else if (char == 'C') {
            result += 'G'
        } else if (char == 'A') {
            result += 'T'
        } else if (char == 'U') {
            result += 'A'
        } else {
            result += char
        }
    }
    return result
}