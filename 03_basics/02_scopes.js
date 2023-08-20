

let a=300
if(true){
    let a = 10
    const b=20
    var c = 30
   // console.log();
}


 //let and const are block scope

 //console.log(a); // this a is takinng value of glopal a not scope a 
  
//console.log(b);
//console.log(c);   // var is not block scope thats why we should not use it 


function one(){
      const userName= "salaar"
      function two(){
        const website = "www.google.com"
        console.log(userName);  // it will take its value because it is child scope it takes parent scope value 


      }
      //console.log(website);   it will give u error that website is not define

      two()
}

one()

//++++++++++++++++two different function ++++++++++===\
console.log(addOne(5))
function addOne(num){
return num + 1
}
// in above example we can print before the initializatio and it will print as well 

 

console.log(addTwo(5));
const addTwo= function(num2){  // Here we are holding function in variable 
    return num2 + 2
}
//But in this above example it will give error >>> ReferenceError: Cannot access 'addTwo' before initialization
