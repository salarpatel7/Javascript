function multiple(){
    return num*5
}

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printme=function(){
    console.log(`price is ${score}`);
}

const chai= new createUser("chai",25)
const tea= new createUser("tea",250)

chai.printme()