
// const form= document.querySelector('form')


// form.addEventListener('submit',function(e){

//     e.preventDefault()


//     const first=parseInt(document.querySelector('#first').value)
//     const second=parseInt(document.querySelector('#second').value)
//     const result=document.querySelector('.result')
    


//      const addition = first + second
// console.log(addition);
//      result.innerHTML=`<span>the result is ${addition}</span>`
//     console.log(addition);
// })

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const first = parseFloat(document.querySelector('#first').value);
    const second = parseFloat(document.querySelector('#second').value);
    const result = document.querySelector('.result');
    const valid= document.querySelector('.valid');


    const addition = first + second;
    
    if (first === '' || isNaN(first) || second==='' || isNaN(second)) {
        valid.innerHTML=`please type in numbers`
    }
    console.log(addition);
    result.innerHTML = `<h1>the result is ${addition}</h1>`;
    console.log(addition);
    

    

});

const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    clock.innerText=date.toLocaleTimeString()
},1000)


const dice = document.querySelector('.dice')

dice.addEventListener('click', function(e){
    e.preventDefault()

    console.log(parseInt(Math.random()*6))

    dice.innerHTML=parseInt(Math.random()*6+1)
})

const promise1 = new Promise((resolve,reject)=>{
    
} )


// const hexColor= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// let genHex=[]
// hexColor.push(genHex)
// console.log(genHex);
function genhex(){
    const hexColor= "0123456789ABCDEF"
    let result="#"

    for (let index = 0; index < 6; index++) {
        result+=hexColor[Math.floor(Math.random()*16)]
        
    }
    return result
}



