//object literal : nothing but properties and methods
//this keyword : this keyword is used to refer to the current object
const user = {
    username: "JohnDoe",
    email: "some@some.com",
    //this is for current context of the object
    getUserDetails : function(){
        // console.log(`Username: ${this.username}, Email: ${this.email}`)
        console.log(this)
    }
}

// // console.log(this)
// console.log(user.email)
console.log(user.getUserDetails())

console.log(this) //global context of the object 

// constructor function : it is used to create multiple objects with same properties and methods
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);