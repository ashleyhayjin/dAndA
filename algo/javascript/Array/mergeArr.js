var merge = function(nums1, m, nums2, n) {
    let arrLen = (m + n);
    nums1 = nums1.concat(nums2);
    for(let i=0; i < arrLen-1; i++){
      if(nums1[i] === 0){
          nums1.splice(i, 1);
      }
    }
    nums1 = nums1.sort((a,b) => a-b);

};

merge([1,3,0], 3, [1,2,5], 3)