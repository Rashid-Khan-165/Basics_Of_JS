// let divs = document.querySelector("div");
// console.log(divs);

// let id = divs.getAttribute("id");
// console.log(id)

// let name = divs.getAttribute("name");
// console.log(name);

/// console.log(para.setAttribute("class","newclass"));

// let div = document.querySelector("div")
// div.style.color=("red")
// div.style.backgroundColor=("black")
// div.innerText=("Rashid Khan")

// div.append("p")
// div.remove();


//------------------Question solve-----------------------------

// create a new button element. Give it a text "click me!" , background color of red & text color of  white.   insert the button as the first element inside the body tag.

let btn = document.createElement("button");
btn.innerText=("click me!");

btn.style.color="white";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);


// Create a <p> tag in HTML , give it a class & some styling .  Now create a new style in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the clas name when you add a new one ? solve this problem using classList.

let para = document.querySelector("p");

para.getAttribute("class");
para.classList.add("newClass");

    




