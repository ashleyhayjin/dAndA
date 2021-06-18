var duplicateZeros = function(arr) {
        
    let i=0;
    var len = arr.length
    console.log("len", len);
// splice includes, (start, deletecount, item1,item2,item3)
// splice allows you to delete multiple items. 
// i=0
// when i = 3..
// [1,2,3,0,1]
// [1,2,3,0,0,1]
// splice, if delete count === 0 then you don't delete anything

    while(i<arr.length){
        console.log("arr outside of while loop:" , arr);
        if(arr[i] === 0){
            arr.splice(i+1, 0 , 0);
            i++
            console.log("i", i);
            console.log("arr", arr);
        }
        i++;
//   length of arr stays at You 4..
        arr.length = len
    }
}

duplicateZeros([1,2,5,0,0,3])