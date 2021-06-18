// special sorting algo that works on numbers 
// sort by number in the last place value(right most digit)

// getDigit returns the digit in num at the given place value
function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// return the number of digits in num
function digitCount(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}
//  given an arr of numbers return the number of digits in the largest numbers in the list
function mostDigits(nums){
    let maxDigits =0;
    for(let i=0; i<nums.length;i++){
        maxDigits =Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}




function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k =0; k <maxDigitCount;k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i=0; i < nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
    return nums;
}

radixSort([1,11,1111,1111])