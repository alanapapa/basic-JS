function triangle(str, num) {
    var s = ''
    for (let i = 1; i <= num; i++) {
        var j = i
        while (j !== 0) {
            s += str
            j--
        }
        s += '\n'
    }
    return s.slice(0, s.length - 1)
}