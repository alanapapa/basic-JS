const vowels = /[aeiouAEIOU]/

function vowelDots(a) {
    var ans = ""
    for (var i = 0; i < a.length; i++) {
        if (vowels.test(a[i])) {
            ans += a[i] + '.'
        } else {
            ans += a[i]
        }
    }
    return ans
}