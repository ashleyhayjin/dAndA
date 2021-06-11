function factorial(num){
    let total =1;
    for(let i=num; i > 0; i--){
        total*=i
    }
    return total;
}

factorial(50);

function factorialRe(num){
    if(num === 1) return 1;
    return num * factorialRe(num-1);
}

factorialRe(50)

// you need a base case
//  max base
// make sure to return in recursion
