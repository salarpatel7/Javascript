 //classes
 //method 
 //properties 
 
 const num = [1,2,3]
 num.push()   //method 


 //this
 class car{
    constructor(name,color,topSpeed){
        this.name=name
        this.color=color
        this.topSpeed=topSpeed
        this.currentSpeed=0

    }
    zeroToSixty(){
        setTimeout(()=>{
            console.log(`wooo!! that was fast`);
            this.currentSpeed=60;
            console.log(this.currentSpeed);
        })
    }
     drive(){
        // console.log("just drove 2 miles");
        this.currentSpeed+=10
     }

     breaks(){
       setTimeout(()=>{
        console.log('excellent breaks ');
        this.currentSpeed=this.currentSpeed-50
        console.log(this.currentSpeed);
       })
     }
 }

 const ferrari = new car('ferrrari','red',250)
// console.log(ferrari.color);
// console.log(ferrari.name);
//  console.log(ferrari);
// ferrari.drive()
// ferrari.breaks()
// console.log(ferrari.currentSpeed);
// ferrari.drive()
// console.log(ferrari.currentSpeed);
ferrari.zeroToSixty()
console.log(ferrari.currentSpeed);
ferrari.breaks()