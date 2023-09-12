new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
})