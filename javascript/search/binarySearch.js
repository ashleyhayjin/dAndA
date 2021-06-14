function binarySearch(arr, target){
    // add whatever parameters you deem necessary - good luck!
      let left =0;
      let right = arr.length-1;
      
      while(left < right){
      
       if(arr[left] === target){
          return left;
      }
      if(arr[right] === target){
          return right;
      }
      if(arr[left] < target){
          left++;
      } else if( arr[right] > target){
          right--;
      } 
      }
      return -1
  }    

  