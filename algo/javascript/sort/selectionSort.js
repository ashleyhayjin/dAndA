function selectionSort(arr){
    for(var i=0; i < arr.length; i++){
        var lowest = i;
        for(var j =i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                // doesn't update if the lowest doesn't change
                lowest = j;
            } 
        }
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp 
    }

    
    
    
    
    
    
    
    
    
    
    return arr;
}

selectionSort([34,22,19,18,17])