const is = {}

is.num = function(any){
    if (typeof any === "number" && !isNaN(any)){
        return true
    }else{
        return false
    }
}

is.nan = function(any){
   return isNaN(any)
}

is.str = function(any){
    return typeof any === "string"
}

is.bool = function(any){
    return typeof any === "boolean"
}

is.undef = function(any){
    return typeof any === "undefined"
}

is.def = function(any){
    return typeof any !== "undefined" 
}

is.arr = function(any){
    return Array.isArray(any)
}

is.obj = function(any){
    return any !== null && typeof any === 'object' && !Array.isArray(any)
}

is.fun = function(any){
    return typeof any === "function"
}

is.truthy = function(any){
    return Boolean(any)
}

is.falsy = function(any){
    return !Boolean(any)
}

console.log(is.falsy(0))