const escapeStr = "`\\/\"'";
const arr = [4,'2'];
const obj = {
    str : "",
    num : 45,
    bool : true,
    undef : undefined,
};
const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str : "",
        num : 12,
        bool : false,
    }
};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);