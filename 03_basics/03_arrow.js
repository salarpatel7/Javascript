const user = {
    username:"salar",
    price: 999,

    welcome:function (){
        console.log(`${this.username}, welcome to the startup`);
    }
}

// user.welcome()
// console.log(user);

//lets see how this works in function 
// function coffee(){
//     let type="mocha"
//     console.log(this.type);         //here is this is strict mode so it is undefined
//     console.log(this);         //here it will refer to global obj
// }
//coffee()  //undefined 

//2nd type funciton 
// const coffee=function (){
//     let type="mocha"
//     console.log(this);   //it refer to global obj
// }
// coffee()  

const coffee= () => {
    let type="mocha"
    console.log(this);   //it will give u an empty obj 
    console.log(this.type);   //here this is strict mode so it will give u undefined 
}
// coffee()

//----Arrow function-----
//1)
// const addtwo= (num1,num2) => {
//     return num1+num2
// }

// console.log(addtwo(2,3));        ........ 5\

//  2) if one line of function no need write return just write in one line it will return 
// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(3,4));

//3) we cam write like this also 
// const addtwo = (num1,num2) => (num1+num2)

//if u wanna return two an obj 
const addtwo = (num1,num2)=> ({username:"salar"})
console.log(addtwo(3,4));    //{ username: 'salar' }