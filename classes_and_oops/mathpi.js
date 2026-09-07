const desp = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(desp)

// console.log(Math.PI);


const Tea ={
    name :"naaaam",
    age: "23",
    isavailable : "True",
}


console.log(Object.getOwnPropertyDescriptor(Tea,"name"))

Object.defineProperty(Tea, 'name', {
    //writable: false,
    enumerable: false,
    
})


console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}