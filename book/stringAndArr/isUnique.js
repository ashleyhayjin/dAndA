function isUnique (str){
    // determine if all the characters are unique
    // binary search
    // first create 2 pointers, one that will be on the first index and the next one that will go through each letter 
    let i = 0;
    let j = 1;
    // funny = return false
    // toe = return true
    let arr = str.split("");
    while(i < arr.length){
        // first check arr 1 and second pointer should go through each of the letters that are at an index greater than i and less than arr.length
        if(arr[i] === arr[j]){
            return false;
        } 
        if( arr[i] !== arr[j]){
            j++;
        }
        if( arr[i] !== arr[j] && j === arr.length-1){
            i++;
            j = i + 1;
        }
    }
}