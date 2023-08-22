const score = 100

//if

// if(score == 100 ){
//     console.log("pass");
// }else{
//     console.log("fail");
// }
const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogl=false
const gmaillogin=true
if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}

if(loggedInFromGoogl || gmaillogin){
    console.log("user logged in")
}