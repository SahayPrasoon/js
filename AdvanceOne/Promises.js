//old way to declare a promise
//declaring it with a variable 
const promise = new Promise (function(resolve, reject){
    //do async task
    // do ab task and network, cryptography
    setTimeout(function() {
        console.log("async hogya bhai");
        resolve() // method to connect it to the .then function
    }, 1000)
})

//by using .then we are connecting it to resolve and reject function of promise
promise.then(function(){
    console.log("promise is consumed");
})

//resolve is something ki pehle promise within the function is resolved and then we can use .then to consume it
//another way to declare promise is by using chaining method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async start task")
        resolve()
    },1000) //setTimeout is used to simulate async task after 1 sec 
}).then(function(){ 
    console.log("promise is consumed");
})



//for checking on reject 
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "naam", age: 22}) //resolve is used to send data to the .then function
    },1000)
})
//idhar .then mei koi bhi function args(keep any name you like) pass karalo as a medium to pass the resolve in promise
promisethree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout (function(){
        let error =true;
        if(!error){
            resolve({"username": "naam"})
        }else{
            reject("error: something went wrong")
        }
    },1000)
    //chianing of .then and .catch is used to handle the resolve and reject function of promise
    //chaining like this is used to handle the async task and its result in a better way and also useful for DB 
})

promiseFour.then((user)=>{
    console.log(user)
}).then((user)=>{
    console.log("promise is consumed");
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //this will default execution



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({"username": "js"})
        }else{
            reject("error: js went wrong")
        }
    },1000)
})

// async await is used to handle the promise in a better way and also useful for DB
// they are not capable to handle the error so we need to use try catch block to handle the error
async function consumerPromiseFive(){
    const response = await promiseFive;
    // console.log("promise is consumed");
    try{
        console.log(response);
    }catch{
        console.log("error")
    }
}

consumerPromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json(); // this takes time to get converted into json for that we use await 
//                     // to wait for the response to be converted into json
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

// getAllUsers()



fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    });