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


