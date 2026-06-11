// let num = "33"

let nos = "3abc" 

// console.log(typeof num)
// undefined is also NaN at conversion time 
// null : it return 0 at conversion time
let no = Number(nos)
console.log(typeof nos)

console.log( no) // NaN : not a number during conversion from string -> number
/*
"33" => 33 
"3ac" -> NaN
boolean true :1 false :0
*/ 

let bool = 1
let con = Boolean(bool)

console.log(con)

// empty string at time of conversion will give false

// num to string

let some = 4
let h = String(some)

console.log(h)
console.log(typeof h)