let singleNumber = function(nums) {
    // define a hashmap to hold the value of the occurences of numbers
    let map = {}
    // iterate through the input array
    for (i = 0; i < nums.length; i++) {
        // if the key doesnt exist i.e. number has not been encountered
        if (nums[i] in map == false) {
         // set its value to 1
        map[nums[i]] = 1
        } 
        else {
        // otherwise increase its value by 1 i.e. number has been found before
        map[nums[i]] += 1
        }
    }

    // then return the key of the key value pair with a value of 1
    for (key in map) {
        if (map[key] == 1)
        return parseInt(key)
    }
}

let nums = [4,1,2,1,2]

console.log(singleNumber(nums))