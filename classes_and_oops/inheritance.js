class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ //extends keyword to access the class above waha objects mei prototype tha 
    constructor(username, email, password){
        super(username) //super keyword se upar wale se extended class ki value le leta hai waha this wagera se access le rhe the better to use this way 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
