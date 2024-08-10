// for(let count = 1; count <= 100 ; count++){
//     console.log("Rashid Khan");
// }
// console.log("Loop has ended");

// let sum = 0;
// let n = prompt("Enter a number : ");
// for(let i = 1; i<=n ; i++){
//     sum=sum+i;
// }
// console.log("sum is : ",sum);

// // for-of loop     (only use for string and array not for object)

// let str = "RashidKhan";
// for(let i of str){  //iterator -> characters
//     console.log("i = ",i);
// }

// let strr = " NawedKhanRashidKhanNaushadKhanKausharFatma"
// let size = 0;
// for(let i of strr){
//     console.log("i = ",i);
//     size++;
// }
// console.log("size is :",size);

// //for-in loop   (use for object and array)

// let student = {               // in object return the value of key
//     name : "Rashid Khan",
//     age : 22,
//     isPass : true,
//     cgpa : 9.4
// };
// for(let key in student){
//     console.log("key =",key , "value =", student[key]);
// }


// create a game where you start with any random game number. ask the user to keep guessing the game number untill the use enters correc value

let gameNum = 7;
let userNum = prompt("Guess the game number : ");

while(userNum!=gameNum){
    userNum = prompt("You entered a wrong number.Guess again : ");
}
console.log("Congratulations,You entered the right number :) ");

