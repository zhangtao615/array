var searchRange = function(nums, target) {
    let len = nums.length;
    if(len === 0) return [-1,1];
    let start = 0;
    let end = len - 1;
    let res = [];
    while(start<end){
        if(nums[start] < target){
            start++;
        }else if(nums[end] > target){
            end--;
        }else if(nums[start] === target && nums[end] === target){
            res.push(start,end);
        }
        return res;
    }
    return [-1,1];
};
searchRange([5,7,7,8,8,10],8);