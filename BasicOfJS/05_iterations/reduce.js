// Reduce 

const myNums = [1,2,3,4]
// const myTotal = myNums.reduce (function (accumulator ,currentvalue){
//     console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`);
//     return accumulator + currentvalue
// },0)

const myTotal = myNums.reduce( (acc,curr) =>acc+curr,0)
console.log(myTotal);



//-------------------Question Solve ------------------------------------------



const shoppingCart = [
    {
        courseName : "javascript",
        price : 2999
    },
    {
        courseName : "Data science course",
        price : 5999
    },
    {
        courseName : "java",
        price : 3999
    },
    {
        courseName : "ReactJs course",
        price : 8999
    },
]
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);



//Take a number n as input from user . Create an array of numbers from 1 to n.

//   i)  use the reduce method to calculate sum of all numbers in array .
//   ii) use the reduce method to calculate product of all numbers in the array.


let n = prompt("Enter a number : ");

let array = [];
for(let i = 1 ; i <= n ; i++){
    array[i-1]=i;
}
console.log(array);

// i) solution -:

let sum = array.reduce((res,curr) => {
    return res + curr ;
})
console.log("Sum of array = ", sum);

// ii) solution -:

let factorial = array.reduce((res,curr) => {
    return res * curr ;
})
console.log("Factorial of array = ", factorial);


