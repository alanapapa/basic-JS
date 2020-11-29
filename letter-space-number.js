function letterSpaceNumber(str) {
    let arr = [...str.matchAll(regexp)]
    let res = []

    for (let i = 0; i < arr.length; i++) {
        res.push((arr[i][0]).slice(0, 3))
    }
    return res
}

let regexp = /[a-zA-Z] [0-9](?!\w)/g
let str = 'He is 8 or 9 years old, not 10.'