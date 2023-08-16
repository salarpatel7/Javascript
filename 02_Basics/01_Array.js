//Array
//() == parenthesis   {} == curly braces   [] == brackets

const myArr=[0,1,2,3,4,5]

const myHeroes = ['spiederman','hulk']

const arr2= new Array(1,2,3,4)

// console.log(myArr[1])

//Array Methods
//myArr.push(6)  // 6 added in myArr in last position
//myArr.push(7)
//myArr.pop()  // remove last value of array

//myArr.unshift(9)  //it added number in first position 
//myArr.shift()  //it removes first position 


//console.log(myArr.includes(4));  //true
//console.log(myArr.indexOf(4));  //4 index


const newArr = myArr.join()  //it convert new arr type which will be in string

// console.log(myArr)
// console.log( newArr)

//--------SLICE , SPLICE-------

console.log("A",myArr)  //A [ 0, 1, 2, 3, 4, 5 ]

const newEx= myArr.slice(1,3) //it gives you 1 to 2nd postion of index output excluding 3
//and slice does not change arr value 
console.log(newEx);

console.log("B",myArr)   //value not changed A [ 0, 1, 2, 3, 4, 5 ]


//but when we use splice it will give u 
const newEx2= myArr.splice(1,3)
console.log(newEx2)    //[ 1, 2, 3 ]  yes its including third postion but 

// it also changing myArr original value 

console.log("C",myArr)  //C [ 0, 4, 5 ]






