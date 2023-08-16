const marvel_heros = ['thor', 'ironman' ,'spiderman']

const dc_heros=['superman', 'flash','batman']

//marvel_heros.push(dc_heros)

//console.log(marvel_heros[3]); [ 'superman', 'flash', 'batman' ]
//console.log(marvel_heros[3][2]);  //batman

const allheros=marvel_heros.concat(dc_heros) //it return a new array and concat the both array well


// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //SPREAD operator
// console.log(all_new_heros)

/*Both CONCAT and SPREAD  works same but in CONCAT There are limitation of adding 
value in SPREAD there is no limitation so you can more ...indian_heros, ...super_heros,...etc*/


const another_array = [1,2,4,[3,6,8],77,34,[45,64,[53,45]]]
//in above ex there are so many array inside the array if u wanna make it into one arrray use FLAT

const new_another_array=another_array.flat(Infinity) //inside u can write how many depth u wanna take into one if u dont have idea u can write infinity but its not good practice

/*  console.log(new_another_array); 
output:>>
[
    1,  2,  4,  3,  6,
    8, 77, 34, 45, 64,
   53, 45
 ]   */

 //if u wanna check array === isArray
 console.log(Array.isArray('salar')) //false 

 //now u wanna make this into array ===from
 console.log(Array.from('salar')) //[ 's', 'a', 'l', 'a', 'r' ]
 console.log(Array.from({name:'salar'})) // keys: will be in empty array []

//if u wnna covert variables into array 

let score = 100
let score2 =200
let score3 = 300

//console.log(Array.of(score,score2,score3)) //[ 100, 200, 300 ]
