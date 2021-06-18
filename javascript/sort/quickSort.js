function pivot(arr, start=0, end=arr.length){
    
    function swap(array,i,j){
        var temp = arr[i];
        array[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[start];
    var swapIndex = start;

    for(var i= start; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex, i)
        }
    }
    swap(arr,start,swapIndex);
    console.log(arr);
    return swapIndex;
}

pivot([4,8,2,1,5,7,6,3])
// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}