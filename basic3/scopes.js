let a=10;
// const b=20;
// var c=30;
// var c =300; //global scope

{} //this is scope

if(true){   //this is block/local scope
    let a=10;
    const b=20;
    // console.log("val", a);
    ;  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const name = "sng"

    function two(){
        const age =22;
        console.log(name);
    }
    // console.log(age);
    two()
}
// one()
if(true){
    const name = "naam"
    if(true){
        const channel =" youtube"
        // console.log(name + channel)
    }
    // console.log(channel);
}
// console.log(name);

//******************************INTERESTING ********************/

add1()
function add1(num){
    return num+1
}

//hoisting: we cannot access before declaration
add() //'add' before initialization
const add = function(num){
    return num+2
}
