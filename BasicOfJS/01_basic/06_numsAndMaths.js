const score =100
// console.log(score);
// console.log(typeof score);

const balance = new Number(1000);
//console.log(balance);  //  [Number: 1000]
//console.log(typeof balance); //object 

// console.log(balance.toString().length); // 4
// console.log(typeof balance); //object

// console.log(balance.toFixed(2));  // 1000.00  fixed after decimal

const anyNumber = 206.663
// console.log(anyNumber.toPrecision(3));  //RoundOf value = 207

const hundereds = 10000000000000000
// console.log(hundereds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-7));  // convert negative value into positive and positive value into negative

// console.log(Math.round(7.21)); // Gives around value

// console.log(Math.floor(9.9));  // floor gives 9 
// console.log(Math.ceil(3.1));   //ceil gives 4

// console.log(Math.min(2,3,4,5,6,7,8));  //2
// console.log(Math.max(4,5,3,2,7,8));  //8

console.log(Math.round(Math.random()*10 + 1 ));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min);

