let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) return [i, j]
        }
    }
    return null
}

nums = [3,2,4]
target = 6

console.log(twoSum(nums, target))