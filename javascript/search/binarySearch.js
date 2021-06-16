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
  };
  
function binarySearchTwo (arr,target){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end) /2);

    while(arr[middle] !== target && start <= end){
        if(target < arr[middle]) {end = middle -1; console.log("first", start, middle, end);}
        else {start = middle +1; console.log("second", start, middle, end);}
        middle = Math.floor((start+end) / 2); console.log("third", start, middle, end);
    }
    return arr[middle] === target ? middle: -1  
}

binarySearchTwo([0,1,4,8,12,13], 8);
