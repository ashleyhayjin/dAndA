var twoSum = function(nums, target){
    // create a map
    let map = new Map();
    // create key value pair with index and value
    for(let i =0; i < nums.length; i++){
        if()
    }
}

var twoSum = function(nums, target) {
    var ans = [];
    var exist = {};
    
    for (var i = 0; i < nums.length; i++){
        if (typeof(exist[target-nums[i]]) !== 'undefined'){
            return [exist[target - nums[i]], i];
        }
        exist[nums[i]] = i;
    }
  }