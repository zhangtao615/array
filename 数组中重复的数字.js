var findRepeatNumber = function(nums) {
    let res = [];
    nums.map(item => {
        if(res.indexOf(item) === -1){
            res.push(item);
        }else{
            console.log(item)
        }
    })
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])