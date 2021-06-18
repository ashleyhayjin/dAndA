var sortedSquares = function(nums) {
    let sortedArr = [];
    nums.forEach(item => {
        let newNum = item ** 2;
        sortedArr.push(newNum);
    })
    
    sortedArr = sortedArr.sort(function(a,b){return a-b})
    return sortedArr;
};

