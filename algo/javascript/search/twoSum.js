const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        console.log("comp", comp)
        if(comp[nums[i] ]>=0){
            console.log("conditional console: ", [ comp[nums[i] ] , i])
        }
        console.log("non-conditional console: ",comp[target-nums[i]] = i)
    }
};

twoSum([2,7,11,15], 9)