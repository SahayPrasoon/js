//singleton method
const obj = new Object();

obj.email ="email@email.com"
obj.age = 22;
obj.name ="prasoon";


// console.log(obj); 
//object declaration: non singleton
//declaring multiple objects in a object
const obj2 = {
    fullname:{
        firstname: "name",
        lastname: "names",
        username:{
            user:"p@12"
        }
    }
}

// console.log(obj2.fullname.firstname)

const use1 = {1:"a",2:"b"}
const use2 = {3:"b",4:"c"}

//assign helps to merge 2 different object
// const obj3 = Object.assign({} ,use1, use2) // in this the empty object  
//                             in with which we want to merge the objects 


const obj3 = {...use1, ...use2} // use spread operator to have better combination
// console.log(obj3);


const ap1 =[{
id:"",
email:""
},{
id:"",
email:""
},{
    id:"",
    email:""

},{
id:"",
email:""
}]
ap1[1].email
// console.log(obj);
//this here return all keys from obj object and display in array format

// console.log(Object.keys(obj))
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.hasOwnProperty('name'));

const course={
    subjectname:"maths",
    marks:"40"
}
// object destructuring: in this we can rename the objects also 
const{subjectname: name, marks: mrk} = course
console.log(name,mrk);

// **********************json-api***************************


