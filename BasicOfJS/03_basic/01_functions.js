function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("D");
}
sayMyName()      //sayMyName => Reference     ||      () => execution

// function addTwoNumbers(number1 , number2){     // (number1 , number2)  => parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,null)  // (4 , null) => arguments


function addTwoNumbers (number1 , number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(4,6)
console.log("Result : ", result);



function loginUserMessage (username = "sam"){
    if(!username){                                  // (!username) = (username === undefined)
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in `
}
//console.log(loginUserMessage("Rashid"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(400,500,2000,3000));


const user = {
    username : "Rashid khan",
    price : "399"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}.`);
}
//handleObject(user)
handleObject({
    username : "Nawed khan",
    price : 999
})

const myNewArray = [200,400,500,600]
function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));



