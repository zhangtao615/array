var isUnique = function(astr) {
    let arr = [];
     for (let i of astr){
         if(arr.indexOf(i) === -1){
             arr.push(i)
         }else{
             return false
         }
     }
     return true
 };
isUnique('leetcode')