const multiply = (a, b) => {
    let res = 0
    let min = false
    if (a < 0 && b > 0) {
        min = true
        a = -a
    }
    if (a > 0 && b < 0) {
        min = true
        b = -b
    }
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    for (let x = a; x > 0; x--) {
        res = res + b
    }
    if (min) {
        res = -res
    }
    return res
}

const divide = (a, b) => {
    let res = 0
    let min = false

    if (a < 0 && b > 0) {
        min = true
        a = -a
    }
    if (a == b) {
        return 1
    }
    if (a > 0 && b < 0) {
        min = true
        b = -b
    }
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    if (a < b) {
        return 0
    }
    if (b == 0) {
        return
    }
    while (a >= b) {
        a = a - b
        res++
    }
    if (min) {
        res = -res
    }
    return res

}

const modulo = (a, b) => {

    let min = false
    if (b == 0) {
        return
    }
    if (a < 0) {
        a = -a
        min = true
    }
    let x = a
    if (b < 0) {
        b = -b
    }
    while (x >= b) {
        if (x == b) {
            return 0
        }
        x = x - b
    }
    if (min) {
        x = -x
    }
    return x
}

console.log(multiply(2, 3), divide(10, 2), modulo(10, 2))