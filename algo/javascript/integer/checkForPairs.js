function findPairs(n, ar) {
    // Write your code here
    // if(ar.length === 0) return 0;
    let count =0;
    let newArr = ar.sort();
    
    for(let i=0; i < ar.length; i++){
        if(ar[i] === ar[i+1]){
            i++;
            count++;
        }
    }
    return count;
}