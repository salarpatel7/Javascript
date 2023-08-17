//signleton
//Object.create


//object.literals
// two types of to access object 1:OBJECT NOTATION 2:DOT NOTAION


const JsUser={
    name: "salar",
    age:14,
    location:'ausa',
    email:"sp@gmail.com",
    isLoggedIn:false,
    "full name":"salar patel"

}

//console.log(JsUser.name);     //dot notation type
//console.log(JsUser["full name"])   //using square bracket 

//how can we use symbol in object 
const mySym= Symbol("key1")
const obj2={
    [mySym]:"how are u"
}
//console.log(typeof mySym);  //Symbol


JsUser.email="chat@gmail.com"   //value change
//Object.freeze(JsUser)  //now value will not change 

JsUser.email="microsoft@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user")
}

console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this["full name"]}`)
}
console.log(JsUser.greeting2());