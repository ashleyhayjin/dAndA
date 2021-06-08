// recursive functions need to have a base case and different input
function countDown(num){
    for(var i=num; i >0; i--){
        console.log(i);
    }
    console.log("geut");
}

countDown(10);

// Base case is a situation when the recursion ends


function refractCount(num){
    if(num <= 0){
        console.log("geeut");
        return;
    }
    console.log(num);
    num--;
    refractCount(num)
}

refractCount(10)