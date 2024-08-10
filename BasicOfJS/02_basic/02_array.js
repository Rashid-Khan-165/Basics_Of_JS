const marvel_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["Batman","Antman","Superman"];
const indian_heros = ["Krish","Shaktiman"]

//let myAllHeros = console.log(marvel_heros.concat(dc_heros,indian_heros));

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);  //  [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Antman', 'Superman' ] ]
//console.log(marvel_heros[3][1]); //Antman

const all_heros = marvel_heros.concat(dc_heros);
//console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]; //spread out value
//console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'Antman', 'Superman' ]

const real_array = [1,2,3,[4,5,6],3,[3,7,[8,7,6]]]
const usable_real_array = real_array.flat(Infinity)
// console.log(usable_real_array); // [1,2,3,4,5,6,3,3,7,8,7,6]

// console.log(Array.isArray("Rashid")); // false

// console.log(Array.from("Rashid")); // [ 'R', 'a', 's', 'h', 'i', 'd' ]
// console.log(Array.from({Name : "Rashid"}));  // [] => intersting case for interview

let score1 = 100;
let score2 = 500;
let score3 = 700;

// console.log(Array.of(marvel_heros,score1,score2,score3)); // [ [ 'Thor', 'Ironman', 'Spiderman' ], 100, 500, 700 ]
//  console.log(Array.of(score1,score2,score3));



// ----------------------------slice and splice------------------------------------------    (slice doesn't change the original array)  (splice changes the origianal array)

// console.log(marvel_heros.slice(0,2));
// console.log(marvel_heros.splice(0,1,3));

let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.splice(2,3,101,122,132));
// console.log(arr);

//add element 
//arr.splice(2,0.101);

//Delete element
//arr.splice(3,1)

//Replace element
//arr.splice(3,1,101)


//-----------------------Solve Question------------------------------

// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Goggle","IBM","Netflix"
//i) Remove the first company from the Array
//ii) Remove Uber and Add Ola in its place
//iii) Add Amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Goggle","IBM","Netflix"];
//console.log(companies.slice(1));
companies.splice(2,1,"Ola");
//companies.push("Amazon");
