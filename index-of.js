// Array.prototype.indexOf = undefined
// Array.prototype.lastIndexOf = undefined
// Array.prototype.includes = undefined

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

const indexOf = function(arr, word, n = 0) {
    for (let i = n; i < arr.length; i++) {
        if (arr[i] == word) {
            return i
        }
    }
    return -1
}

const lastIndexOf = function(arr, word, n = arr.length - 1) {
    for (let i = n; i >= 0; i--) {
        if (arr[i] == word) {
            return i
        }
    }
    return -1
}

const includes = function(arr, word) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == word) {
            return true
        }
    }
    return false
}

// console.log(indexOf(beasts, 'ant', 2));
// console.log(lastIndexOf(beasts, 'ant', 2));
// console.log(includes(beasts, 'ant'));