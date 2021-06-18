function stringSearch (str, search){
    let count = 0;
    let strCount = 0;
    let searchCount = 0;
//  Breaks strings into arrays
    let strArr = str.split("");
    let searchArr = search.split("");

    while( strCount <= strArr.length && searchCount <= searchArr.length){
        if(strArr[strCount] !== searchArr[searchCount]){
            strCount++;
            searchCount = 0;
        } else if(strArr[strCount] === searchArr[searchCount]){
            strCount++ && searchCount++;
            if(searchCount === searchArr.length-1){
                count++;   
            }
        } 

    }
    console.log(count);
    return count;
}

stringSearch('dogsaandcats', 'and');

