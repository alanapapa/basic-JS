function pyramid(str, n) {
    var s = ''
    var spaceFlag = false

    for (let i = 1; i <= n; i++) {
        spaceFlag = false
        var j = i
        var k = (n - j) * str.length
        while (j !== 0) {

            if (!spaceFlag) {
                while (k !== 0) {
                    s += ' '
                    k--
                }

            }
            spaceFlag = true
            s += str
            j--
        }
        j = i - 1
        while (j !== 0) {
            var k = n - j
            spaceFlag = true
            s += str
            j--
        }
        s += '\n'
    }
    return s.slice(0, s.length - 1)
}