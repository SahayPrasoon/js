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
}).then(function(user){
    console.log(user);
}).then(function(){
    console.log("promise is consumed");
})
.catch(function(error){
    console.log(error);
})