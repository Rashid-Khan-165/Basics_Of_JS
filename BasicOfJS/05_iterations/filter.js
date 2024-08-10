// const coding = ["js","ruby","java","cpp"]
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);


//  Filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num) => num>3)
// const newNums = myNums.filter((num) =>{
// return  num>3                              // if we use scope then we use retun keywords
// })
 //console.log(newNums);

//  const newNums = []
//  myNums.forEach( (num)=>{
//     if (num>3){
//        newNums.push(num)
//     }
//  })
//  console.log(newNums);




//--------------------Question Solve------------------------------------


const books = [
    {title:'book 1',genre:'Fiction',publish:1981,Edition:2004},
    {title:'book 2',genre:'Non-Fiction',publish:2006,Edition:2017},
    {title:'book 3',genre:'Science',publish:2007,Edition:2016},
    {title:'book 4',genre:'History',publish:1987,Edition:2013},
    {title:'book 5',genre:'Fiction',publish:1999,Edition:2015},
    {title:'book 6',genre:'Non_Fiction',publish:2002,Edition:2020},
    {title:'book 7',genre:'History',publish:2009,Edition:2018},
    {title:'book 8',genre:'Fiction',publish:1998,Edition:2019},
    {title:'book 9',genre:'Science',publish:2008,Edition:2015},
    {title:'book 10',genre:'Non_Fiction',publish:2003,Edition:2009}
]
let userbooks = books.filter( (bk) => bk.genre === 'Fiction') 
userbooks = books.filter( (bk) => {
    return bk.publish>=2000 && bk.genre==="Science"} )
console.log(userbooks);



//We are given array of marks of students . Filter our of the marks of students that score 90+ .

let marks = [97,95,47,86,96,90,65,73,100];
const toppers = marks.filter((val) => {
    return val > 90 ;
});
console.log(toppers);




