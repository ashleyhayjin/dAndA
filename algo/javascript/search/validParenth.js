

var isValid = function(s) {
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let heap = [];

    for(let char of s){
        console.log("char", char);
        console.log("HEAP:", heap);
        if(bracket[char]){
            heap.push(bracket[char])
        } else {
            if(heap.pop() !== char) return false
        }
    }

    return (!heap.length)
};

isValid('(){}')