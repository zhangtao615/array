var firstMissingPositive = function(nums) {
    if(nums.length == 0 || (nums.length == 1 && (nums[0] <= 0 || nums[0] > 1))) return 1;
    if(nums.length == 1 && nums[0] == 1) return 2;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0 )
    }
};
firstMissingPositive([3,4,-1,1])