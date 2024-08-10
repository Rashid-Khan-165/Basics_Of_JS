//if

const isLoggedIn = true
const temperature=60


/* if (temperature < 40) {
   console.log("temperature less than 40"); 
}else{
    console.log("temperature greater than 40"); 
}
console.log("Executed");   */

//  =,<,>,==,===,<=,>=,!=,!==


/*const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power : ${power}`);
}
console.log(`user power:${power}`); */

const balance = 5000

//if (balance > 500) console.log("test"),console.log("test2");//shorthand nlt required
    
if (balance < 500) {
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitcard = true
const loginFromGoggle = false
const loginFromEmail = true

if(userLoggedIn && debitcard && loginFromEmail){ 
    // ( && me sari condition true honi chahiye)
    console.log("Allow to buy courses");
}
if (loginFromEmail || loginFromGoggle) {
    // ( || me 1 condition true honi chahiye)
    console.log("user logged in");
}