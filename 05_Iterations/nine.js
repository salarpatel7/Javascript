//reduce 
const mynums=[1,2,3,4]

// const myTotal=mynums.reduce( function(acc, mycrntValue){
//     console.log(`accumulator value is : ${acc} ,currentValue ${mycrntValue}`);
// return acc + mycrntValue
// },1)    //o/p:11

//with arrow function 

//const myTotal=mynums.reduce( (acc,val)=> acc+val  ,1)  //o/p: 11

//console.log(myTotal);

const shoppingCart=[
    {
        itemName:'js course',
        price:2345
    },
    {
        itemName:'appleios course',
        price:9999
    },
    {
        itemName:'c++',
        price:500
    },
    {
        itemName:'webdev',
        price:2999
    },
]

const pricetopay = courses.reduce( (acc, item)=> (acc+item.price), 0)

console.log(pricetopay);