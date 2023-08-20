

function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("l");
    console.log("a");
    console.log("r");
}

//sayMyName()   //>> sayMyname === reference ,() === execute

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }

// addTwoNumbers(3,"3")  33

function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(2,4)
// console.log("result",result)

// function loginUser(username){
//      return `${username} just logged in`
// }

//console.log(loginUser("salar")) //salar just logged in

//console.log(loginUser());   salar just logged in

function loginUser(username){
    if(username === undefined){
        console.log("please write a userName");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser());

function calculateCarPrice(...num1){
    return num1
}

//console.log(calculateCarPrice(200,300,400));

const cart={
    username: "salar",
    price:199
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and its price is ${anyobject.price}`);
}

//handleObject(cart)

// handleObject({
//     username:'sam',
//     price:'free20%'
// })

const myarry=[100,200,300,400]

function returningArry(thisarry){
 return thisarry[1]
}

console.log(returningArry(myarry));