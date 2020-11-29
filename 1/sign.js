function sign(n){
    if (n>0) {
        return 1
    };
    if (n<0) {
        return -1
    };
    if (n==0) {
        return 0
    };
};

function sameSign(n1,n2){
    if (sign(n1)==sign(n2)) {
        return true
    }
    return false
};

// console.log(sign(undefined));
// console.log(sameSign(-2,-1))