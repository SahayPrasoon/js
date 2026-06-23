function db(){
    console.log(`db connected`);
} 
//declaring with paranthesis passes function as a expression 
(
function db(){                  
    console.log(`db connected`);
})();   //sometimes when we encounter multiple iife blocks it does not know when to end i.e it is unable to use ';'
(
function db(){   
    //this is named iife               
    console.log(`db connected 2`);
})();

((name)=>{
    console.log(name);
    
})("naaaaam")
// db()