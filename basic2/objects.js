// Object.create()// singleton metho/constructor method
//question: how will you use symbol as a key in object ?

const sym = Symbol("key1")

const obj = {
    name: "prasoon",
    [sym]: "key1",     //here we are declaring symbol in objects
    age: 22,
    score: [10,20,30],
    email:"some@some.com"
} // literals declaration method

//ways to get value from objects
// console.log(obj.email)
// console.log(obj["email"]);
// console.log(obj[sym]);


obj.email = "ema@emil.com"
// // Object.freeze(obj)

obj.email ="ema@eml.com"
// console.log(obj)

obj.greetings = function(){
    console.log("hey!");   
}

obj.greetings2 = function(){
    console.log(`hey! ${this.age}`);   
}

console.log(obj.greetings());
console.log(obj.greetings2());
