function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', { //property of getter and setter is oBject.defineproperty jismei hum ek this pass karenge for instance yeh global wale se alag hai
                                    // 'password' property jisko override karna hai aur ek object jismei hum get and set kar skte hai 
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);