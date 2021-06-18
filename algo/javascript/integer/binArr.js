function main() {
    var n = parseInt(readLine());
    var count = 0;
    // to give an array of 1s
    var BinArr = n.toString(2).split(0);
   // if you are not using ES6 the you can also do this
   //    var max = Math.max.apply(null, BinArr)
    var max = Math.max(...BinArr);
    console.log(max.toString().length);
}

// turns number into a binary