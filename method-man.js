function words(str){
    return str.split(" ")
};

function sentence(str){
    return str.join(" ")
};

function yell(str){
    return str.toUpperCase()
};

function whisper(str){
    return "*"+str.toLowerCase()+"*"
};

function whisperr(str){
    return str.toLowerCase()
};

function capitalize(str){
    return yell(str[0])+whisperr(str.slice(1))
};

console.log((whisper('DÉJÀ VU')))