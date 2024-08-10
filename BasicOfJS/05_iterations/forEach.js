// for each loop majorily uses for array 

//---------------(forEach is also known as Higher order function/method)---------------------

const coding = ["js","ruby","java","cpp","cpp"]
coding.forEach(function(val){
    console.log(val);
})


// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
});



//--------------------------Question Solve----------------------------

// For a given array of numbers , print the square of each value using the foreach loop3

let nums = [4,54,66,7,8,9];
let calSquare = (sqr) =>{
    console.log(sqr*sqr);
};

nums.forEach(calSquare);






