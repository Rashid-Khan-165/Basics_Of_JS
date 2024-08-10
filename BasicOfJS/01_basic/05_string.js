//   Strings are immutable (we can't change the value of strings)

let name = "Rashid"
let age =  "21"
//console.log(typeof age);


//console.log(name  +  age + " value");
console.log(`My name is ${name} and i am ${age} years old.`)
 
name = "Nawed Khan";
age = "23";

console.log(`My brother name is ${name} and he is ${age} years old`);

name = "Naushad Khan"
age = "55"
console.log(`My father name is ${name} and he is ${age} years old`);
//console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])
// console.log(name[6])
// console.log(name[7])
// console.log(name[8])

name = "Kaushar Fatma "
age = "39"
console.log(`My mother name is ${name} and she is ${age} years old`);
// console.log(name[4]);
// console.log(age[1]);

//console.log(`my name is ${name} and i am ${age} years old`); // use this syntax

let game = new String ('rashid-khan')

//console.log(game[0]);
//console.log(game.toUpperCase());
// console.log(game.charAt(5));
//console.log(game.indexOf('i'));

//------------------toUppercase---------------------------
// game = "kaushar-fatma"
// console.log(game.toUpperCase());
// game = `naushad-khan`
// console.log(game.toUpperCase());
// game=`nawed-khan`;
// console.log(game.toUpperCase());

//------------------charAt--------------------------------
// game = `Rashid Khan`
// console.log(game.charAt(4));
// game = `Nawed Khan`;
// console.log(game.charAt(4));
// game = `Naushad Khan`
// console.log(game.charAt(4));
// game = `Kaushar Khan`;
// console.log(game.charAt(4))

//------------------------indexOf-------------------------
// game = `Rashid Khan`
// console.log(game.indexOf('s'));
// game = `Nawed Khan`
// console.log(game.indexOf('K'));
// game = `Naushad Khan`
// console.log(game.indexOf('u'));
// game = `Kaushar Fatma`
// console.log(game.indexOf('u'));



//------------------------------substring---------------------
const newString = game.substring(0,5); // substring means to generate new string , charAt 0 to 5
console.log(newString);

// game = `Rashid Khan`
// console.log(game.substring(0,2));
// game = `Nawed Khan`
// console.log(game.substring(0,6))
// game = `Naushad Khan`
// console.log(game.substring(0,8))
// game = `Kaushar Fatma`
// console.log(game.substring(0,7))


//----------------------------slice--------------------------
const anotherString = game.slice(-8,8)
//console.log(anotherString);

// game = `Rashid Khan`
// console.log(game.slice(4,6))
// game = `Nawed Khan`
// console.log(game.slice(2,5))
// game = `Naushad Khan`
// console.log(game.slice(4,7))
// game = `Kaushar Fatma`
// console.log(game.slice(3,6))


//-----------------------replace-----------------------------

const url = "https:google.com%20animal"
// console.log(url.replace('%20','-'));

// game = `williamsonkane7539#gmail.com`
// console.log(game.replace('#','@'));
// game = `aarfanazkhan@gamil.com`
// console.log(game.replace('naz','rashid'))



//------------------------trim  &    concat--------------------------------

// game =  `              Rashid  Khan    Nawed Khan   Naushad    Khan    Kaushar   Khan      `
// console.log(game.trim());
// game = `Aadil`
// play = `Aahil`
// console.log(game.concat(play))


//---------------------------includes--------------------------
// console.log(url.includes('birds'));  //includes always give boolean value.

game = `I am a boy `
console.log(game.includes('boy'))
game = `I am a web developer`
console.log(game.includes('developer'))

const str = 'The quick brown fox jumps over the lazy dog.';



const words = str.split(' ');
//console.log(words[3]); // print word at the index of 3

const chars = str.split('');
// console.log(chars[8]); // print character  at the index of 8

 console.log(str.split());  //[ 'The quick brown fox jumps over the lazy dog.' ]

//console.log(game.split('-')); //[ 'rashid', 'dk' ]



//------------------Question Solve-----------------------------------

//Prompt the user to enter their full name ,Generate a user name for them based on their input .Start username with @ , followed by their fullname and ending with the fullname length.


let fullName = prompt("Enter your full name without spaces ");
let userName = "@ "+ fullName + fullName.length
console.log(userName);
