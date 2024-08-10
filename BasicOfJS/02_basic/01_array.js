//Arrays  =>  an array is an object , enables storing a collection of multiple items under a single variable name
//    Arrays are mutable in javascript (we can change the value)




// const array1 = [7,3,8,2,9,7,4];
// console.log(array1[5]);
 const myHeros = ["spiderman","ironman","batman","antman"];

//  ----------------Using for loop------------------------

//  for (let idx = 0;idx<myHeros.length;idx++){
//   console.log(myHeros)
//}

// ---------------Using for-of loop------------------

// for(let hero of myHeros){
//   console.log(hero);
// }

// let cities = ["delhi","pune","chennai","ranchi","kolkata"];
// for(let city of cities){
//   console.log(city.toUpperCase())
// }


// console.log(myHeros[3]);

const myArray = new Array (2,3,6,7,"Tomato");
//console.log(myArray);
//console.log(myArray[3]);

// console.log(myArray.toString());   // .toString changes array into string
// console.log(myArray);  // .toString doesn't affect the main array
 
//myArray.push(5,6,7)  //use for add a item in last
//console.log(myArray); 

let deletedItem = myArray.pop()    // by using pop last item will removed
//console.log(`Deleted item = ${deletedItem}`);

//myArray.unshift(7) //use for add a item in first
//console.log(myArray);

myArray.shift()
//console.log(myArray);  //by using shift first item will removed 

// console.log(myArray.includes(9)); //if item isn't include in array list then includes gives a boolean value that is false
// console.log(myArray.indexOf(9));// if item isn't include in array list then indexof gives -1 value

//console.log(typeof myArray);

const newArray = myArray.join() //by using .join array item changes to object into string
//  console.log(newArray);
//  console.log(typeof newArray);

//  slice or splice   (slice doesn't change in the original array but splice change the original array)

//  console.log("A ",myArray);

//  const myA1 = myArray.slice(1,3)
//  console.log(myA1);
//  console.log("B ",myArray);

// const myA2 = myArray.splice(1,3)
//   console.log(myA2);
//   console.log("c",myArray);


//--------------Question solve---------------------

// for a given array with marks of students -> [85,97,44,65,86,70] Find the average marks of the entire class.

// let marks = [85,97,44,65,86,70]
// let sum = 0 
// for(let val of marks){
//  sum += val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of class is ${avg}`)

// for a given array with prices of 5 items -> [250,430,50,300,900] All items have an offer of 10% OFF on them.Chnage the array to store final price after applying offer.

let items = [250,430,50,300,900];

//-------------------------using for-of loop------------------------------
// let i =0;
//  for(let val of items){
//   let offer = val/10;
//   items[i] = items[i]-offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
//  }
 //-----------------------using for loop----------------------------------

//  for(let i = 0;i < items.length ;i++){
//   let offer = items[i]/10;
//   items[i]=items[i]-offer;
//  }
//  console.log(items);

