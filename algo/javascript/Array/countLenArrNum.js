var findNumbers = function(nums) {
    let count =0;
    nums.forEach(item => {
       let numLen = item.toString().length;
        if(numLen % 2 ===0){
            count++;
        }
    })
    
    return count;
};