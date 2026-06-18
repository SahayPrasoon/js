const hero = ["shaktiman","doga"]
const hero2 = ["ironman", "spiderman"]

// hero.push(hero2)
// console.log(hero);
// console.log(hero[2][0]);

// const m1= hero.concat(hero2)
// console.log(m1);

const m2 = [...hero, ...hero2];
console.log(m2)

const anotherArr = [1,2,3,[6,7,8],5,[3,4,[5,7,8]]];
const realarr = anotherArr.flat(Infinity)
console.log(realarr)

console.log(Array.from("name"));//here it converts it into array
console.log(Array.isArray("name"));// check if given element is array or not

console.log(Array.from({name: "prasoon"})) // here we are not giving in 
               // objects which of key or value is needed to be converted to array.


let score1 = 100;
let score2 = 200;
let score3 = 20;
let score4 = 40;

console.log(Array.of(score1,score2,score3,score4));
