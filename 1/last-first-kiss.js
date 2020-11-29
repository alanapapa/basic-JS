function first(a){
    return a[0]
};
function last(a){
    return a[a.length-1]
};
function kiss(a){
    const arr = [last(a), first(a)]
    return arr
};