var firstMissingPositive = function(nums) {
    let result = 1
    while (nums.includes(result)) {
        result++
    }
    console.log(result)
};
firstMissingPositive([3,4,-1,1])