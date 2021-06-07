var isPalindrome = function(x) {
    let arr = x.toString();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length-1 -i]){
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
};

isPalindrome(12231)