const User = {
    _email: 'h@hc.com',
    _password: "abc", //_ defines it as a private property and user ko alag snormal user are not used 


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);