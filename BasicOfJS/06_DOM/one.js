// let paragraph = document.getElementById("par")
// console.dir(paragraph)

// let headings = document.getElementsByClassName("heading")
// console.dir(headings);

// let firstElement = document.querySelector(".heading")   //for first elenent querySelector
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p")
// console.dir(allElement)

// let div = document.querySelector("div");
// console.dir(div)

// let heading = document.querySelector("h1")
// console.dir(heading)


//----------------Question Solve ------------------------

//Create a H1 heading element with text - "Hello JavaScript !". Append "from Rashid Khan Students "to this text using JS.

// Solution :- 

let h1 = document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText = ("Hello JavaScript ! , from Rashid Khan Students")


// Create 3 divs with common class name - "box".Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
console.log(divs)

// divs[1].innerText="What is box ?";
// divs[0].innerText="What is in box2 ?"
// divs[0].innerText="What is in box 3 ?"

let i = 1;
for(let div of divs){
    div.innerText = `What is box ${i}`;
    i++;
}