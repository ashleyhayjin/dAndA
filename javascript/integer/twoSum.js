var twoSum = function(nums, target) {
    
    for(let i=0; i< nums.length; i++){
        for(let j=1; j < nums.length; j++){
            let sum = nums[i] + nums[j];
            if(sum === target && i !== j){
                return [i, j];
            } else {
                continue;
            }
        }
    }
};

// extremely slow, must refractor