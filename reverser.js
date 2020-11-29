function reverse(a) {
    let str = ""
    let arr = []
    for (let i = a.length - 1; i >= 0; i--) {
        if (typeof a === 'string') {
            str += a[i]
        } else {
            arr.push(a[i])
        }
    }
    if (typeof a === 'string') {
        return str
    } else {
        return arr
    }
}