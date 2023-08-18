
//Singleton object
//const tinderUser = new Object()   

//non singleton object
const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn= false

 //console.log(tinderUser)

 const regularUser={
    email:"so@gmail.com",
    fullname:{
        userfullname:{
            firstname:"salar",
            lastname:"patel"
        }
    }
 }

 //console.log(regularUser.fullname.userfullname);

 const objOne={
    1:"A",
    2:"b"
 }

 const objeTwo={
    3:"c",
    4:"d"
 }

 //const obj3= Object.assign({}, objOne,objeTwo)   //
 //

 const obj3 = {...objOne,...objeTwo}
 //console.log(obj3);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//if u wanna know ex name property is there or not in object 

console.log(tinderUser.hasOwnProperty('sa')) //