function isPositive(n) {
    if (n > 0) {
        return true
    }
    return false
};
function abs(n) {
    if (n < 0) {
		return -n
    }
    if (n==0) {
        return 0
    }
	return n
};

// console.log(isPositive(-4));
// console.log(abs(-5));