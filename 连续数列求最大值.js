var maxSubArray = function(nums) {
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = nums[0];
    for(let i = 2;i<=nums.length;i++){
        dp[i] = Math.max(nums[i-1],dp[i-1+nums[i-1]]);
    }
    return Math.max(...dp);
}
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])