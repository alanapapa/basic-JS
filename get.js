const get = (src, path) => {
    let key = path.split('.')
    let ans = src
    for (let i = 0; i < key.length; i++) {
        if (ans[key[i]] === undefined) {
            return undefined
        }
        ans = ans[key[i]]
    }
    return ans
}