console.log("Arrow Function");




const fullName = "Mohamed Ayman";

const getName = (x) => console.log("firstName is ", fullName.split(" ")[0])

getName(fullName);




const getName1 = (fullName) =>  fullName.split(" ")[0]

console.log(getName1("Mohamed Ayman"));



const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number)=> number * this.multiplyBy)
    }
};

console.log(`The Multiplication Of These Numbers [${multiplier.numbers.join(",")}] is ` +` [${multiplier.multiply()}]`);