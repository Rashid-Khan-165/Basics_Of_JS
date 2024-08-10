// // const accountId = 657238
// // let accountEmail = "rashid@google.com"
// // var accountPassword = "12345"
// // accountcity = "Delhi";
// // let accountState;

// // //accountId = 2  (not allowed)

// // accountEmail = "jkh.@google .com"
// // accountPassword = "789078"
// // accountcity = "Mumbai"

// // console.log(accountPassword);

// /*
// prefer not to use var
// because of issue in block scope and functional scope
// */


// // console.table([accountId,accountEmail,accountPassword,accountcity,accountState])



// const instaId = 2837458;
// let userName = "Rashid Khan"
// let follower = 345;
// let following = 875;
// let isLoggedIn = true;

// follower = 7564;
// following = 465;

// console.table([instaId,userName,follower,following,isLoggedIn])



let marks = prompt("enter a number : (1-100)");
let grade;

if(marks>=90&&marks<=100){
    grade = "A";
}else if(marks>=70&&marks<=89){
    grade = "B";
}else if(marks>=50&&marks<=69){
    grade = "C";
}else{
    grade = "D";
}
console.log("Your Grade is ",grade);