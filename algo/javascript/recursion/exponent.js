function power (base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent -1 )
}

power(5,3)

// power (5,3) 
// exponent is not equal to 0 so will not return a 1
// power (5,3)    5 * power(5, 2); === 125
// power(5,2)     5 * power(5,1); === 25
// power(5,1)     5 * 1 === 5