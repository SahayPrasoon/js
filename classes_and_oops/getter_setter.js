class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
//when get & set and constructor method work simultaneously on same property we tend to fill up whole of call stack
    get email(){
        return this._email.toUpperCase() //get value of email aur touppercase mei change 
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh` //._ko hum set kardete hai this same bacha deta hai override kardeta hai better chalta hai
    }

    set password(value){
        this._password = value //set value of password 
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);