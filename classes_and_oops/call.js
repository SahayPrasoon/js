function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called"); // call hoga but usmei context remove hote hi call stack se reference gayab ho jayega 
}

function createUser(username, email, password){
    SetUsername.call(this, username) // .call is used in for holding the reference context value of it without it it only calls and removes the context 
                                    //.call only call and new refernce will be given and need to be given its own "this" current context for it removal ke baad bhi recover rakhta hai 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);