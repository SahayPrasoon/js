class user {
    constructor(username, age , standard){ // it gets called as soon we initialize a object using new keyword 
    this.username = username;
    this.age = age;
    this.standard = standard;
    }
    tAge(){
        return `please give age to me ${this.age} age`
    }

    tStandard(){
        return `please give class ${this.standard} class`
    }
    tUsername(){
        return `please tell your name ${this.username}`
    }
}


const cllass = new user("naaam", "23", "12")

console.log(cllass.tAge());
console.log(cllass.tStandard());
console.log(cllass.tUsername());



// behind the scene

function User(username, age, Standard){
    this.username = username;
    this.email = age;
    this.password = Standard
}

User.prototype.tAge = function(){
    return `${this.password}abc`
}
User.prototype.tStandard = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());