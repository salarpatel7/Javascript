

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

console.log(loginUser());
