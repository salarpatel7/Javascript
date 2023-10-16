//object litterals === nothing but object

// const user ={
//     username:"salar",
//     loginCount:8, 
//     signedIn:true,

//     getUserInfo:function(){
//         // console.log("got user details ");
//         console.log(`username: ${this.username}`);
//     }
// }

// console.log(user.getUserInfo());

//constructor
//new === constructor function >> it allows to make multiple instances with single obj
// const promiseOne= new Promise()
// const date = new Date()

//function User(username,logincount,isloggedin){
 //   this.username=username            //here (this) is variable storing value in this var we can take any name 
    // this.count=logincount
    // this.isloggedin=isloggedin

    // return this
//}

// const userOne= new User("salar",12,true)
// const usertwo= new User("palli",9,false)
// console.log(userOne);
// console.log(usertwo);



const user= {
    username: "hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("got user details ");
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,countlogin,isloggedin){
    this.username=username
    this.countlog=countlogin
    this.isloggedin=isloggedin

    // return this   // we can write or not it dosnt matter 
}

const info = new User("saalaar" , 12, false )
const prop =new  User("cake" , 20, true )
console.log(info);
console.log(prop);