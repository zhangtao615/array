var twoSum = function(numbers, target) {
  var len = numbers.length;
  var left = 0,right = len - 1;
  while(left < rigth){
      if(numbers[left] + numbers[right] === target){
          return [left + 1, right + 1];
      }else if(numbers[left] + numbers[right] < target){
          left++;
      }else if(numbers[left] + numbers[right] > target){
          right--;
      }
  }
};
twoSum([2, 7, 11, 15],9);