let reverseString = function(s) {
    r = []
  
    for (let j = s.length - 1; j >= 0; j--) {
        r.push(s[j])
    }
  
    for (let i = 0; i < s.length; i++) {
        s[i] = r[i]
    }

    return s
}

s = ["h","e","l","l","o"]

console.log(reverseString(s))