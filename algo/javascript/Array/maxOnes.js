var findMaxConsecutiveOnes = function(nums) {
    let count =0;
     let maxCount = 0;
     nums.forEach(item => 
     {if(item === 1){
         count++;
     } else {
         maxCount = Math.max(maxCount,count);
         count=0;
     }})
     
     return Math.max(maxCount, count);
 }