var cutFirst = (str) => str.slice(2)
var cutLast = (str) => str.slice(0, str.length - 2)
var cutFirstLast = (str) => str.slice(2, str.length - 2)
var keepFirst = (str) => str.slice(0, 2)
var keepLast = (str) => str.slice(str.length - 2, str.length)

var keepFirstLast = (str) => {
    if (str.length == 2 || str.length == 3 || str.length == 4) {
        return str
    } else {
        let st = ''
        st += str.slice(0, 2)
        st += str.slice(str.length - 2, str.length)
        return st
    }
}