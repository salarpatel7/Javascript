//immediately invoked function expression
//iife
//named iife
(function chai(){
    console.log('hello chai');   //hello chai
})();

//simple iife 
( ()=>{
    console.log("hello buddy");   //hello buddy
})();

//passing parameters in iife
( (name)=>{
console.log(`hello ${name} welcome`); //hello salar welcome
})("salar");