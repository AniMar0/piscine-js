function get(src, path) {
    let Path = path.split('.');
    let coco = 0
    let temp = src
    while (Path.length > coco) {
        if (temp[Path[coco]] === undefined) return undefined
        temp = temp[Path[coco]]
        coco++
    }
    return temp
}