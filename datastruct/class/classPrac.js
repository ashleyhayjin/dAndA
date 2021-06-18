class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
    }
    fullName(){
        return `Your name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies+=1;
        if(this.tardies >=3){
            return `${this.firstName} ${this.lastName} are expelled.`
        }
    }

    addScore(score){
        this.score.push(score);
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
}
// single instance methods 
let ashley = new Student ("Ashley", "Lee");
console.log(ashley);
console.log(ashley.fullName());

// constructor methods 
// instance vs static
