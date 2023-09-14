// // new Promise(function (resolve,reject) {
// //     setTimeout(function(){
// //         console.log("async task 2");
// //         resolve()
// //     },1000)
// // })

// //create a promise
// const promisone=new Promise(function(resolve,reject){
//     //do an async task
//     //db calls , cryptography ,network call
//     setTimeout(function(){
//         console.log("async task is complete");
//     },1000)
// })

// promisone.then(function(){
//     console.log("promise cosumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async resolved 2");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"salar",passoword:"123"})
//         }
//         else{
//             reject("ERRROR: something went  wrong")
//         }
//     })
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("the promise is either resolved or rejected"))


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"javascript",passoword:"123"})
//         }
//         else{
//             reject("ERRROR: js went  wrong")
//         }
//     },1000)
// })

// async function cosumePromiseFive(){
//  try {
//     const response= await promiseFive
//  } catch (error) {
//     console.log(error);
//  } 
// }
// cosumePromiseFive()

// async function getAllUsers(){
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data=await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("e:",error);
//   };
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((resp)=>{
//     return resp.json()
// })
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

const superHeroToken='2450840285123031'
const baseURL=`https://www.superheroapi.com/api.php/${superHeroToken}`
const newHeroButton=document.getElementById('newHeroButton')

const heroimageDiv=document.getElementById('heroImage')

const getSuperHero=(id,name)=>{
    fetch(`${baseURL}/${id}`)
    .then(respnse=>respnse.json())
    .then(json=>{
        console.log(json)
        heroimageDiv.innerHTML=`'<img src="${json.image.url}" height=200 width=200>'`
    })
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random()* numberOfHeroes) + 1
}
console.log(randomHero())
newHeroButton.onclick=()=>getSuperHero(randomHero())

