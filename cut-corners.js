const trunc = (n) => {

    return n = n - n % 1
}

const ceil = (n) => {
    if (n >= 0) {
        if (n % 1 > 0) {
            return trunc(n) + 1
        } else {

            return trunc(n)
        }
    } else {
        if (-(n % 1) > 0) {
            return trunc(n)
        } else {
            return trunc(n)
        }
    }
}

const floor = (n) => {
    if (n >= 0) {
        return n = n - n % 1
    } else if (n < 0) {
        n = -n
        return n = -(n - n % 1 + 1)
    }

}

const round = (a) => {
    if (a >= 0) {
        if (a % 1 == 0) {
            return a
        } else if (a % 1 >= 0.5) {
            return trunc(a) + 1
        } else {
            return trunc(a)
        }
    } else {
        a = -a
        if (a % 1 >= 0.5) {
            return -trunc(a) - 1
        } else {
            return -trunc(a)
        }
    }

}