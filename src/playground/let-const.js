console.log("hi")


var fullName = "Mohamed Ayman"

function getName() {

    let firstName = "Mohamed";
    return firstName;
}

let firstName = getName();
console.log(firstName)


if(fullName) {
    let secondName = fullName.split(" ")[1];
    console.log(secondName);
}


console.log(secondName)




// var is a function scope //#endregion
// let + const blocking scope