//for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// for(let i=0; i<=10 ;i++){
//     const element = i;
//     if (element == 5) {
//         console.log("5 is jhkaaas");  //
//     }
//     console.log(element);
// }

/* output
1
2
3
4
5 is jhkaaas
5
6
7
8
9
10*/

for(let i=1; i<=10 ; i++){
   // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
       //console.log(i + "*" + j + "=" + i*j);
        
    }
    
}
//table of 1 to 10


let myArray = ["flash","Batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

//Break and continue

// for (let index = 0; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`detected 5`);
//         break                            //it break or stop the loop after getting condition done 
//     }
//     console.log(`value of i is ${index}`);    
// }
for (let index = 0; index <= 20; index++) {

    if (index == 5) {
        console.log(`detected 5`);
        continue                       //it skip one condition 
    }
    console.log(`value of i is ${index}`);    
}