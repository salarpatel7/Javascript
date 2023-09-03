//

const myNumbers = [1,2,3,4,5,6,7,8]

// const newNUmslist = myNumbers.map( (num)=>  num+10 )


//chaining 
 const newlist = myNumbers.map((num)=> num * 10 )
                            .map( (num) => num + 1)
                            .filter( (num) => num > 30)
                            .map((num) => num + 5)

 console.log(newlist);



