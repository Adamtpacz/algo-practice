let reverseInteger = function(x) {
    r = Number(Math.abs(x).toString().split('').reverse().join(''))
    if (r >= (-2) ** 31 && r <= (2 ** 31) - 1) {
        return x > 0 ? r : -r
    }
    else {
        return 0
    }
}

x = 123

console.log(reverseInteger(x))