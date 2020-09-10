var findLengthOfLCIS = function(nums) {
    if(nums.length == 0) console.log(0);
    let left = 0, res = 1;
    while(left < nums.length){
        right = left + 1;
        while(right<nums.length-1){
            if(nums[right-1]<nums[right]){
                right++;
                const range = right - left;
                res = Math.max(res,range);
            }else{
                break;
            }
        }
        left = right;
    }
    return res;
};