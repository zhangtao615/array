var letterCombinations = function(digits){
    var res = [];
    if(digits.length == 0) return [];
    var nums = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mon',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    for(let num1 of nums){
        let arr = nums[num1];
        if(res.length > 0){
            var temp = [];
            for(let num2 of arr){
                for(let num3 of res){
                    temp.push(num2+num3)
                }
            }
            res = temp;
        }else{
            res.push(...arr);
        }
    };
    return res;
}
letterCombinations('23')