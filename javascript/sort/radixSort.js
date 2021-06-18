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












function radixSort(){}