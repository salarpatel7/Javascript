//dates

let myDate = new Date()
/*
console.log(myDate.toString())     //Tue Aug 15 2023 14:38:32 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()) //Tue Aug 15 2023
console.log(myDate.toLocaleDateString())  //8/15/2023

console.log(typeof myDate)  // date is object 
*/

//let myCreatedDate= new Date(2023,1,25)
//let myCreatedDate= new Date(2023,1,25,5,3) //year , month (in js month start from 0 = janauary), date, hour, minute


// let myCreatedDate= new Date("12-09-2023")
// console.log(myCreatedDate.toString());

let myTimeStamp= Date.now() 
// console.log(myTimeStamp);
//console.log(Date.now()/1000); //date in second >> 1692111633.637
//console.log(Math.floor(Date.now()/1000)); // 1692111684


let newDate= new Date()


console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleDateString("default",{
    weekday:"long"
})

console.log(newDate)
