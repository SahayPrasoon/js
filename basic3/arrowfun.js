const name ={
    username:"naam",
    age: 22,
    adduser: function(){
        console.log(`${this.username}, user added`);
        console.log(this);  //this tells about current context  
    }  
}
//  name.adduser()
//  name.username ="nama"
//  name.adduser()

// console.log(this); // nothing is declared in global variable and due to this its returning empty object

// function chaitea(){
//     let naam= "name"
//     console.log(this.naam); //this does not work in function
// }
// chaitea()

const tea = () =>{
    let naam ="name"
    console.log(this.naam);
    
}
// tea()

//ways to declare arrow function 

() =>{}
// const age = (num1, num2) =>{ // declaring with variable: return is needed explicit return
//     return num1 + num2
// }

// const age =(num1, num2)=> (num1 + num2) //implicit declaration it does not require return statement: useful for objects
const age = (num1, num2) => ({name: "naaaaaam"})

console.log(age(2,3));



