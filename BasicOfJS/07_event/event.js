let btn1 = document.querySelector("#btn1")
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("btn1 was clicked")
//     let a = 30;
//     a++;
//     console.log(a);
// }

// let content = document.querySelector("#content");
// content.onmouseover = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("Mouse over done.");
//     let a = 23 , b = 45 ;
//     let result = a+ b;
//     console.log(result);

// }




// //--------------------------------Event Listeners---------------------------------------

// // node.addEventListener(event,callback)

// // node.removeEventListener(event,callback)

// //  Note : the callback reference should be same to remove

// btn1.addEventListener ("click",(e) => {
//     console.log("btn1 was clicked - Handle1")
// });

// btn1.addEventListener ("click",(e) => {
//     console.log("btn1 was clicked - Handle2")
// });


// const handler3 = () => {
//     console.log("btn1 was clicked - Handle3");
// }
// btn1.addEventListener ("click",handler3);
  

// btn1.addEventListener ("click",(e) => {
//     console.log("btn1 was clicked - Handle4")
// });

// btn1.removeEventListener("click",handler3);



//---------------------------Question solve--------------------------------

// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. 

let modeBtn = document.querySelector("#mode");
let currMode = "Light";
let body =  document.querySelector("body");

modeBtn.addEventListener("click",() =>{
    if(currMode==="Light"){
        currMode="Dark";
       body.classList.add("dark");
       body.classList.remove("light");

    }else{
        currMode="Light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
    console.log(currMode);
})


