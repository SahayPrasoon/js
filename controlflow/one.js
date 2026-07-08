// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== -> this checks 

// const score = 200

// if (score > 100) {
//     let power = "fly"                 //let here helps to keep the variable defined and executed within scope 
//     console.log(`User power: ${power}`);
// }

// this below console is independent of the conditional statement so this will get executed 
// but problem is that because it is not defined in the scope it will give error 
// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // implicit declare 
//                                                            don't multiple console declare in single line


// basic implementation of if-else
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// this is logical OR  operator
if (loggedInFromGoogle || loggedInFromEmail) {          
    console.log("User logged in");
}