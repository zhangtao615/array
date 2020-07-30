//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// var moveZeroes = function(nums) {//最简洁的写法，时间复杂度较高，仅供欣赏
//     nums.sort((a,b)=>b===0?-1:0)
// };

//双指针法
var moveZeroes = function(nums) {
    let j = 0;
    for (let i=0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
  return nums;
};