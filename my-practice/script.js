
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
    result.innerHTML = `<span>the result is ${addition}</span>`;
    console.log(addition);
    
});
