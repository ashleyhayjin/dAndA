function cracklePop(){
    let index =0;
    while (index < 101){
        if(index % 3 === 0 && index % 5 ===0){
            console.log("Cracklepop");
            index++;
        } else if(index % 5 === 0){
            console.log("Pop");
            index++;
        } else if(index % 3 ===0){
            console.log("Crackle");
            index++;
        } else{
            console.log(index);
            index++;
        }
    }
}

cracklePop();