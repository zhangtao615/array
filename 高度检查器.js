var heightChecker = function(heights) {
    let count = 0;
    let arr =  JSON.parse(JSON.stringify(heights));
    arr.sort((a,b)=>a-b)
    for(let i=0;i<heights.length;i++){
        if(arr[i] != heights[i]) {
            ++count;
        }
    }
    console.log(count)
};
heightChecker([1,1,4,2,1,3]);