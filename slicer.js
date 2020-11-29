function slice(v, from, to) {
    let start, end = 0
    if (to === undefined) {
        if (from < 0) {
            start = v.length + from
        } else {
            start = from
        }
        end = v.length
    } else {
        if (from < 0) {
            start = v.length + from
            end = v.length - 1
        } else {
            start = from
            if (to < 0) {
                end = v.length + to
            } else {
                end = to
            }
        }
    }
    let str = ""
    let arr = []
    for (let i = start; i < end; i++) {
        if (typeof v === 'string') {
            str = str + v[i]
        } else {
            arr.push(v[i])
        }
    }
    if (typeof v === 'string') {
        return str
    } else {
        return arr
    }
}

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(slice(animals, 2, 5));