// let myname = "naaam       "
// console.log(myname.truelength);


let myMONEY = ["USD", "CND", "INR", "RUBBLE"];

let myMONEYpow ={
    USD : "high",
    CND :"moderate",
    INR :"extremely high",

    getUSDpow: function(){
        console.log(`usd is good ${this.USD}`);
    }
}

Object.prototype.prasoon = function(){
    console.log(`please give me added objects`)
}

Array.prototype.hiprasoon = function(){
    console.log(`please add the new objects in arr`)
}

myMONEY.hiprasoon()
// myMONEYpow.hiprasoon() //here the access given at lower level like array is not accessible to objects in heirerchy
// myMONEY.prasoon()
// myMONEYpow.prasoon() 




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //yeh directly access hai for prototype and inheritance to borrow access of objects
}

Teacher.__proto__ = User //prototype assign to protypal inheritance for the teacher aceessing the user object

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // Sets the prototype of a specified object o to object proto or null. Returns the object o.
                                                //yeh sePropertyOf works similarly to that of __proto__

let anotherUsername = "ChaiAurCode     "

//created a truelength method directly within the String to access it 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()