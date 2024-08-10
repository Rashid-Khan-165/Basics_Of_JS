// for of

//["","","",""]
//[{},{},{},{}]


const India = ["Delhi","Ranchi","Mumbai","Kolkata","Pune"]
for (const city of India) {
  // console.log(city); 
}

const myClass = "I am in fourth standard"
for (const roll of myClass) {
   // console.log(`hi,${roll}`);
}


// Maps

const map = new Map ()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('UK',"Umited Kingdom")
// console.lomapg();
for (const [key,value] of map) {
    console.log(key, `-:` ,value);
}

const myObject = {
    'game1' : "PUBG",
    'game2' : "FreeFire"
}
// for (const [key,value] of myObject) {
//     console.log(key, `-:`, value);          //forof loop does not work for object
// }
