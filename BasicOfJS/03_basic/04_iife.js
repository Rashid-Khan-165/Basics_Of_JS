//  Immediately Invoked Function Expressions  (IIFE)


(function chai (){
    // Named IIFE 
    console.log(`DB CONNECTED`);
})() ;  //(add two IIFE with semicolon)

((name) => {
    //Unnamed IIFE 
    console.log(`${name} , DB CONNECTED SUCCESSFULLY`);
})("Rashid")