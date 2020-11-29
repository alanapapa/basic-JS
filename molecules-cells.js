function RNA(strand) {
    if (strand === '') {
        return ''
    }
    let RNA = ''
    for (let i = 0; i < strand.length; i++) {
        if (strand[i] === 'G') {
            RNA += 'C'
        }
        if (strand[i] === 'C') {
            RNA += 'G'
        }
        if (strand[i] === 'T') {
            RNA += 'A'
        }
        if (strand[i] === 'A') {
            RNA += 'U'
        }
    }
    return RNA
}

function DNA(strand) {
    if (strand === '') {
        return ''
    }
    let DNA = ''
    for (let i = 0; i < strand.length; i++) {
        if (strand[i] === 'G') {
            DNA += 'C'
        }
        if (strand[i] === 'C') {
            DNA += 'G'
        }
        if (strand[i] === 'U') {
            DNA += 'A'
        }
        if (strand[i] === 'A') {
            DNA += 'T'
        }
    }
    return DNA
}