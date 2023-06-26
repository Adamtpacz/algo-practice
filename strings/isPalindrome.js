let isPalindrome = function(s) {
    forward = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('')
    reverse = forward.slice().reverse()
    check = []

    for (let i = 0; i < forward.length; i++) {
        if (forward[i] != reverse[i]) {
            check[0] = forward[i]
        }
    }
    
    return check[0] ? false : true
}

s = " "

console.log(isPalindrome(s))