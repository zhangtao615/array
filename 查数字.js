var search = function(nums, target) {
    var count = 0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] === target){
            count++;
        }
    }
    return count;
};
search([5,7,7,8,8,10],8)