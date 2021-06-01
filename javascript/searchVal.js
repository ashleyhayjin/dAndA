function searchVal(arr, val){
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = Math.floor((min+max) / 2);
        if(arr[middle] < val){
            // if the middle of the arr is less than the sought out value, increase your minimum value to 1;
            min = middle +1;
        } else if(arr[middle] > val){
            // if the middle of the arr is more than the sought out value, decrease your max value by 1;
            max = middle -1;
        } else {
            return middle;
        }
    };
    return -1 && console.log(-1);

}

searchVal([1,2,3,4,5], 5);