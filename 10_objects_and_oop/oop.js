//object litterals === nothing but object

const user ={
    username:"salar",
    loginCount:8, 
    signedIn:true,

    getUserInfo:function(){
        // console.log("got user details ");
        console.log(`username: ${this.username}`);
    }
}

// console.log(user.getUserInfo());

//constructor
//new === constructor function >> it allows to make multiple instances with single obj
// const promiseOne= new Promise()
// const date = new Date()

function User(username,logincount,isloggedin){
    this.username=username            //here (this) is variable storing value in this var we can take any name 
    this.count=logincount
    this.isloggedin=isloggedin

    // return this
}

const userOne= new User("salar",12,true)
const usertwo= new User("palli",9,false)
console.log(userOne);
console.log(usertwo);