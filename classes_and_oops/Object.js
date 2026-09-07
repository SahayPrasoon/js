function multiply (num){
    return num+5
}

multiply.power =2;

console.log(multiply(4))
console.log(multiply.power)

console.log(multiply.prototype) // also has predefined context to it that is defined 
                                // the defined this keyword bhi wahi context mei hota hai 



// the this keyword is used for the 
function useLogin(username, score ){
    this.username = username;
    this.score = score ;
}

useLogin.prototype.increment = function (){
    this.score++; //this keyword is like who so ever has called please go and implement them
}


useLogin.prototype.printME = function(){
    console.log(`my score is ${this.score}`)
}



const chai = new useLogin("chai", 25)
const tea = useLogin("Tea", 250)

tea.printME()
