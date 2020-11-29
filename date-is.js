const er = /\d{4}-\d{2}-\d{2}/
const isValid = (data) => {
    let x

    if (er.test(data)) {
        return false
    }

    if (data == new Date() || (data == new Date(x) && er.test(x)) || /\d+/.test(data) || (data == new Date(x) && /\d+/.test(x))) {
        return true
    } else {
        return false
    }
}

const isAfter = (data, toCompare) => {
    if (isValid(data) == false || isValid(toCompare) == false) {
        return false
    }

    var d1 = new Date(data);
    var d2 = new Date(toCompare);
    if (d1.getTime() > d2.getTime()) {
        return true
    } else {
        return false
    }

}
const isBefore = (data, toCompare) => {
    if (isValid(data) == false || isValid(toCompare) == false) {
        return false
    }

    if (isAfter(data, toCompare)) {
        return false
    } else {
        return true
    }
}

const isFuture = (data) => {
    if (isValid(data) == false) {
        return false
    }
    var curData = new Date()
    var isFutureDate = new Date(data)
    if (isFutureDate.getTime() > curData.getTime()) {
        return true
    } else {
        return false
    }

}
const isPast = (data) => {

    if (isValid(data) == false) {
        return false
    }
    var curData = new Date()
    var isPastDate = new Date(data)
    if (isPastDate.getTime() < curData.getTime()) {
        return true
    } else {
        return false
    }
}