//data types: 2>> 1) Primitive data types (call by value ) 
/* 
 string , num, boolean , null , undefined, symbol, bigint
*/
let name = "saalar"  //string 
const id=18   //number
let isLoggedIn=true   //boolean
let company;   //undefined
const myId=Symbol('123')   //symbol
const bigNumber=234241324324n //bigInt

console.log(typeof bigNumber)
//2) Non primitive datatypes (reference type )
//array , object, function 
//array 
const heroes=["batman", "superman", "spiderman"]

//object
let person={
    name:"salar",
    age:23,
    location:"usa"
}

//function
let myfun= function(){
    console.log("hello world");
}



//+++------------------------=======================++++++++++++

//stack(primitive) ,heap(NOn-primitve)

