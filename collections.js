
function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return arrToStr(setToArr(set))
}

function strToArr(str) {
    return str.split('');
}

function strToSet(str) {
    return arrToSet(str);
}

function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return arr.reduce((obj, value, index) => {
        obj[index] = value;
        return obj;
    }, {});
}

function strToObj(str) {
    return str.split('').reduce((obj, char, index) => {
        obj[index] = char;
        return obj;
    }, {});
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Set) return 'Set';
    if (value instanceof Map) return 'Map';
    if (typeof value === 'object') return 'Object'; 
    if (typeof value === 'string') return 'String'; 
    if (typeof value === 'number') return 'Number'; 
    if (typeof value === 'function') return 'Function';
    return typeof value;
}

console.log(superTypeOf(""))