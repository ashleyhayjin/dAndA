var checkIfExist = function(arr) {
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            let m = arr[i] * 2;
            if(arr[j] === m && j !== i){
                return true;
            }
        }
    }
    return false;
};