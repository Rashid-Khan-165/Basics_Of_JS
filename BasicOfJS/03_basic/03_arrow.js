const user = {
    username : "Rashid",
    price : 999,

    welcomeMessage : function () {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "rashid"
//     console.log(this.username);

// }
// chai()


// const chai = function(){
//     let username = "rashid"
//     console.log(this);
// }
// chai()



///////////////////////////Arrow Function///////////////////////////


const pani = () => {
    let username = "rashid"
    console.log(this);
}
pani()

// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;
// }
// console.log(addTwo(4,6));

const add =(num4 , num5) => {
  return num4 + num5;
}
//console.log(add(6,7));

let mul = (num9 , num7) => {
    return num9*num7;
}
//console.log(mul(4,5));

//const addTwo = (num1 , num2) => num1 + num2

//const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Rashid"})

console.log(addTwo());



//-----------------------Question Solve -------------------------------

// Create a function using the "function" keywords that takes a string as an argument & returns the numbers of vowel in the string.

function countVowels (str){
    let count = 0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("Rashid Khan");
countVowels("AarfaRashidKhan");


// Create a arrow function to perform same task

const countVow = (str) => {
    let count = 0;
    for(let char of str ){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
    }
}
console.log(count);
}
countVow("Naushad Khan")




