let a = 300;
if (true) {
    let a = 40;
    let b = 45
console.log(a);
}
console.log(a);


function one() {
const username = "Rashid"
    
function two() {
    const website = "youtube"
    // console.log(username);
    // console.log(website);
  }
  //console.log(website);
  two()
}
one()


if (true) {
    const username = "Rashid"
    if (username === "Rashid") {
        const website = "youtube"
        // console.log(username + website);
        // console.log(website);
    } 
    //console.log(website);
    //console.log(username);
}
//console.log(username); 



//=========================intersting=================================


console.log(addone(5))
function addone(num1) {
    return num1 + 1
}

addTwo(5)
const addTwo = function num1() {
    return num1 + 2
}
