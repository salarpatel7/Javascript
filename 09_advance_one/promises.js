// new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// })

//create a promise
const promisone=new Promise(function(resolve,reject){
    //do an async task
    //db calls , cryptography ,network call
    setTimeout(function(){
        console.log("async task is complete");
    },1000)
})

promisone.then(function(){
    console.log("promise cosumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async resolved 2");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"salar",passoword:"123"})
        }
        else{
            reject("ERRROR: something went  wrong")
        }
    })
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))