var findDuplicate = function(nums) {
    nums.sort();
    var i = 0;
    while(i < nums.length - 1){
        var j = i +1;
        if(nums[i] === nums[j]){
            console.log(nums[i]); 
            break;
        }
        else i++;
    }
};
findDuplicate([3,1,3,4,2])