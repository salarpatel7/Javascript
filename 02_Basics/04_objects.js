
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

 const obj3= Object.assign({}, objOne,objeTwo)   //
 console.log(obj3);