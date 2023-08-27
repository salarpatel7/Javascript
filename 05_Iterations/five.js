const coding = ['js','py','java','c','typescript']
// callback

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item )=>{       //arrow function
// console.log(item);
// })


// function printme(val) {
//     console.log(val);
// }
// coding.forEach(printme)

const mycoding= [
    {
        langaugeName:'javascript',
        filename:'js'
    },
    {
        langaugeName:'Java',
        filename:'java'
    },
    {
        langaugeName:'python',
        filename:'py'
    }
]

mycoding.forEach( (value)=>{
    console.log(value.filename);
})