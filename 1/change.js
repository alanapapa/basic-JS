function get(key){
    return sourceObject[key]
};
function set(key, value){
    return sourceObject[key]=value; 
};

// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }

// console.log(get('num'));
// console.log(set('bool', false));