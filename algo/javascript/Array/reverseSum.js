var reverse = function(x) {
    let newX = x.toString().split("");
    if(newX[0] === "-"){
        newX = parseInt(newX.reverse().join(""));
        x = -newX;
    } else {
        newX = parseInt(newX.reverse().join(""));
        x = newX;
    }
    if (-Math.pow(2, 31) < x && x < Math.pow(2, 31) - 1) {  
        return x;
    }
    return 0;
};

reverse(-12345);

// var reverse = function (x){
//     let newX = x.toString().split("");
//     if(newX[0] )
// }