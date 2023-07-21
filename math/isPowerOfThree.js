let isPowerOfThree = function(n) {
    // check if n = 0 and return false if it is
    if (n == 0) {
        return false
    }
    // check if n = 1 (3^0) and return true if it is
    else if (n == 1) {
        return true
    }
    // check if n is evenly divisible by 3 
    else if (n % 3 == 0) {
        // then divide n by 3 for new n
        n = n / 3
        // check if n = 3 and return true i.e. its been fully reduced and confirmed to be a power of 3
        if (n == 3) {
            return true
        }
        // call the function recursively to keep reducing n by a factor of 3
        return isPowerOfThree(n)
    } 
    // if n is not 0, 1, or full reduced to 3, return false i.e. not power of 3
    else {
        return false
    }
}

n = 27

console.log(isPowerOfThree(n))