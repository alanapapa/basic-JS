function chunk(arr, len) {
    var result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.slice(i, i + len))
        i += len - 1
    }
    return result
}