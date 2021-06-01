function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    console.log(inputCopy);
    inputCopy.forEach((str) => {
      let evenStr = '';
      let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
};


function processData2 (input){
let first = input.split("\n");
let new1 = first[1].split("");
let new2 = first[2].split("");
let third = [];
let fourth = [];
let third2 = [];
let fourth2 = [];
for(let i =0; i < new1.length; i++){
    if(i % 2 == 0){
        third.push(new1[i]);
    } else {
        fourth.push(new1[i]);
    }
}
for(let i =0; i < new2.length; i++){
    if(i % 2 == 0){
        third2.push(new2[i]);
    } else {
        fourth2.push(new2[i]);
    }
}

let final1 = third.join("") + " " + fourth.join("");
let final2 = third2.join("") + " " + fourth2.join("");
console.log(final1);
console.log(final2);
// Code failed with multiple /n in the input parameter
};