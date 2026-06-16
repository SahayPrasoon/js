//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// stack(non primitive) and heap(primitive)
let name ="naam"
let anotherName = name;

anotherName ="sam"

console.log(name);

console.log(anotherName);


let user1 ={
    name:"user",
    email: "user@user.com"

}


let user2 = user1;
user2.email ="user@google.com"
console.log(user1.email);
console.log(user2.email);



// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3