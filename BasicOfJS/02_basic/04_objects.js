//const tinderUser = new Object()
const tinderUser = {}
tinderUser.name = "Rashid"
tinderUser.isLoggedIn = false
tinderUser.id = "123abc"

//console.log(tinderUser);

const regularUser = {
    email:"rashid@google.com",
    fullName :{
        userFullName :{
            firstName:"Rashid",
            lastName:"Khan"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)  // intereting for interview
const obj3 = {...obj1, ...obj2} // spread operator (same as array concept) most uses
//console.log(obj3);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//['name','id','isLoggedIn']
// console.log(Object.values(tinderUser));['Rashid','123abc',false]
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('LoggedIn')); //result in boolean 

const course = {
    name : "js in Hindi",
    price : "999",
    courseInstructor : "Rashid"
}
//course.courseInstructor

const {price : p} = course //destructing of object
console.log(p);


// {
//      "name": "js in Hindi",
//    " price" : "999",                       // API in the form objects
//    " courseInstructor" : "Rashid"   
// }

{
    [],
    [],         // API in the form of Array        // About JSON
    []
}