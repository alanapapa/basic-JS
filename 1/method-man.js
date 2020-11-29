function words(str){
    return str.split(' ')
};
function sentence(arr){
    return arr.join(' ')
};
function yell(str){
    return str.toUpperCase()
};
function whisper(str){
    return '*'+str.toLowerCase()+'*'
};
function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
};
// console.log(words('hello world ok'));
// console.log(sentence(['qwqw', 12, 'fdg']));
// console.log(yell('hello'));
// console.log(whisper('HI'));
// console.log(capitalize('HIKJGkhj'));