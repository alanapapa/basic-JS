const escapeStr = '\` \\ \/\" \''
const arr = [4,'2'];
const obj= { str: "Alem", num: 2,  bool: true,undef: undefined}
const nested = {
    arr : [4,undefined,'2'],
    obj : {str: "Alem", num: 2,  bool: true}
}   

Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

console.log(arr,obj,nested)