const num = 400; // here the js engine detects it as to be number type
// console.log(num);

const nume = new Number(10) // here we have declared the nume variable to be a number type
//console.log(nume);

//console.log(nume.toString().length);// length of string

//console.log(nume.toFixed(3)); // fixes digits in decimal/ nums

const othernum = 23.445
//console.log(othernum.toPrecision(3)); // helps to make precision on numbers before decimal

const nums = 1000000
//console.log(nums.toLocaleString('en-IN')); // helps to build comma according to indian standards


// ++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++
// const no = 4.2
console.log(Math.abs(-4)) // makes positive using .abs
console.log(Math.ceil(4.2)) // takes upper value
console.log(Math.floor(4.2)) // takes lower value in decimal


console.log((Math.random()*10)+1);

const min =5
const max =10

console.log(Math.floor(Math.random()*(max-min+1))+min)