function first(a){
    return a[0]
};

function last(a){
    return a[getLength(a)-1]
};

function getLength(a){
    return a.length
};

function kiss(a){
    return [last(a),first(a)]
}