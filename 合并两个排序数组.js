var mergeSortArray = function(nums1,nums2){
    let len1 = nums1.length,len2 = nums2.length;
    let arr = [];
    let i=0,j=0;
    while(i<len1 && j<len2){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else if(nums1[i] > nums2[j]){
            arr.push(nums2[j]);
            j++
        }else if(nums1[i] === nums2[j]){
            arr.push(nums1[i]);
            arr.push(nums2[j]);
            i++;
            j++;
        }
    }
    if(i<len1){
        //return arr.concat(nums1.splice(i))
        console.log(arr.concat(nums1.splice(i)))
    }else if(j<len2){
        // return arr.concat(nums2.splice(j));
        console.log(arr.concat(nums2.splice(j)))
    }else{
        // return arr;
        console.log(arr);
    }
}
mergeSortArray([1,2,6],[3,5,7])