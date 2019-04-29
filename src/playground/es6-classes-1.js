


class Person {
    constructor(name= 'Anonymous', age= 23) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. My Name Is ${this.name} ! and my Age Is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name, age,major) {
        super(name,age);
        this.major = major;
    }
    
    hasMajor() {
        return !!this.major
    }
    
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasMajor()) {
            greeting += ` And my Major Is ${this.major}`
        }
        return greeting
    }

}


class Traveler extends Person {
    constructor(name,age,major,homeLocation) {
        super(name,age,major);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if(this.homeLocation) {
            greet += ` Hey Iam From ${this.homeLocation}`
        }
        return greet
    }
}




const me = new Traveler("Mohamed Ayman", 25, 'Computer Science', "Mansoura");
// const ayman = new Traveler(undefined,undefined,undefined,"cairo")
const ayman = new Traveler("Ayman")


console.log(me.getGreeting());
console.log(ayman.getGreeting());