const userEmail = ["Rashid","Nawed"]
if (userEmail) {
   console.log("Got user Email"); 
}else{
    console.log("Don't have user Email");
}


//  Falsy Values => 

//  (false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN)

// Truthy Values =>

//  ("0", 'false' , " " , [] , {} , function(){} )


if (userEmail.length === 2) {
    console.log("This Array have two items");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing Operator (??) :  About null , undefined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 5
val1 = undefined ?? 5
val1 = null ?? 5 ?? 10
console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");





