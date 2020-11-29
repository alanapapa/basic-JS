// String.prototype.repeat = undefined
const repeat = function(str, n) {

let result = ''
    while (n > 0) {
        result += str
        n--
    }
    return result
}

// const chorus = 'Because I\'m happy. ';
// console.log(`Chorus lyrics for "Happy": `, repeat(chorus, 2));