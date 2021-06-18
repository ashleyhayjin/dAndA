function takeShower(){
    return "Showering";
}

function eatBreak(){
    let meal = cookFood()
    return `Eating ${meal}`;

}

function cookFood(){
    let items = ["eggs", "pancakes", "bar"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp(){
    takeShower();
    eatBreak();
    console.log("Im ready to go to my interview");
}

wakeUp();