// find the first occurence of a needle in a haystack. 
// receiving 2 strings in the input
// 
var strStr = function(haystack, needle) {
    // edge case
    if (!needle.length) return 0;
    // if the haystack doesn't include the first character in the needle string return -1 because that means its not there at all
    if (!haystack.includes(needle[0])) return -1;
    
    // the length is set to the length of the needle not the haystack
    const len = needle.length;
    
    // 
    for(let i = 0; i < haystack.length; i++){
        // if haystack at the index of i is equal to the first character of needle...
        // lets say the haystack has the same character at index of 2, you would slice from 2 to 4

        if(haystack[i] === needle[0]){
        // slice the haystack starting from i and if the sliced haystack is the same as needle you return the i because i is when the index starts 
            if(haystack.slice(i, i+len) === needle) return i;
        }    
    }
    // otherwise return -1 because it's not in there. 
    return -1;
};