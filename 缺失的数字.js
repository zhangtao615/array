var missingNumber = function(nums) {
    var len = nums.length;
    for(var i=0;i<len;i++){
        if(nums[i] != i) {
            return i;
        }
    }
    return len;
};
missingNumber([0,1,2,3,4,6]);