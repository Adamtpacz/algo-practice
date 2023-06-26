let removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1; j++) {
        if (nums[i+1] == nums[i]) {
            nums.splice(i+1, 1)
        } 
      }
    }
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i+1] == nums[i]) {
        removeDuplicates(nums)
      }
    }
    k = nums.length
    return k
}

nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums))