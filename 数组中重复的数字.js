var findRepeatNumber = function(nums) {
    let res = [];
    nums.map(item => {
        if(res.indexOf(item) === -1){
            res.push(item);
        }else if(res.indexOf(item) !== -1){
            console.log(item)
        }
    })
    //console.log(res)
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])