function sumZero (arr){
   let left = 0;
   let right = arr.length - 1;
   
   while (left < right){
       let sum = arr[left] + arr[right];
       console.log("sum", sum);

       if(sum === 0){
        console.log(arr[left], arr[right])
        return (arr[left], arr[right]);
       } else if ( sum < 0){
            left++
       } else {
           right--
       }
   }
}


sumZero([-2,-1,0,1])