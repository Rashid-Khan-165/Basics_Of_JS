//singleton
//object agar literals se banega to singleton nii banega  aur agar constructors se banega to singleton banega

//object.declare =  that is constructor type (isise singleton bnta hai)


//object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Rashid",
    "Full name": "Rashid Khan",
    age : 18,
    [mySym]:"mykey1",
    "Reg Number": "MCA200880",
    lastLoggedIn : "Monday,Wednesday",
    email : "rashid@goggle.com",
    city : "Daltonganj"
}
// console.log(jsUser["city"]);
// console.log(jsUser["Reg Number"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rashid@chatgpt"
//Object.freeze(jsUser), // after freeze value doesn't change
jsUser.email ="rashid@microsoft"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
}
jsUser.greetingtwo = function(){
    console.log(`Hello jsUser,${this["Reg Number"]}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());