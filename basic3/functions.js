function sayname(){
    console.log("n");
    console.log("a");
    console.log("m");
    console.log("e");
}
// sayname() //we have executed the function

// function addnum(num1, num2){
//     console.log(num1+num2)
// }

function addnum(num1, num2){
    let result = num1 + num2
    return result
    console.log("asd") // this line will not get executed due to return function already 
    //                   written above
}
const result = addnum(2,3)
// console.log("result: ", result);

function username(name ="naam"){ //here minimum value of name is naam it will never go in if block
    if(name === undefined){ //this is also written as if(!name){} checks function is true/false
        console.log("enter your name: ") //checks name is undefined or not 
        return 
    }
    return `${name} hi! how are you?`
}

// console.log(username("adi")) //the method gets overridden
// console.log(username("adi"))
// console.log(username()); //when no values are passed the printed statement is undefined 

// function calculatePrice(...num1){ // here we use rest operator: puts value in array
//     return num1
// }

function calculatePrice(val1,val2, ...num1){ // val1=200,val2=400, num1 has 700 & 800 
                                            // helps declare all value in an array
    return num1
}
console.log(calculatePrice(200,400,700,800)); //print value of the function argument

const user= {
    name:"naaam",
    age:22
}
function handleObject(anyobject){
    console.log(`${anyobject.name} and age is ${anyobject.age}`)
}

// handleObject(user) //this same can be done as 
handleObject({
    name:"naam",
    age: 23
})

const newArr = [200,400,500,1000]
function arr(getarray){
    return getarray[1]
}
console.log(arr(newArr));


