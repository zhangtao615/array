var permute = function(nums) {
    let res = []
    let backtrack = (path) => {
        if(path.length == nums.length) res.push(path)
        for(let n of nums){
            if(!path.includes(n)){
                path.push(n);
                backtrack(path.slice());
                path.pop();
            }
        }
    }
    backtrack([]);
    console.log(res);
};
permute([1,2,3])
