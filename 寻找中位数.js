var findMedianSortedArrays = function(nums1, nums2) {
    var num = [...nums1,...nums2].sort((a,b)=>a-b);
    var len = num.length;
    if(len % 2 != 0){
        len = Math.floor(len/2);
        return num[len];
    }else{
        return (num[len/2]+num[len/2 -1])/2;
    }
};

findMedianSortedArrays([1,2],[3])