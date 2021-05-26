function countUnique(arr){
    let i=0;
    for(let j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            console.log(arr[i], arr[j])
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// return 2 



countUnique([1,1,1,1,1,2,3,4])
    