//for of 


const arr= [1,2,3,4,5]
for (const number of arr) {
   // console.log(number);
}

const greetings = "hello world"

for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
}

//maps
const map = new Map()
map.set ('IN', 'india')
map.set('usa','united states of america')
map.set('fr','france')

for(const [key,value] of map){
   console.log(key ,'>' ,value);
}

const myObject = {
   'gameone': 'nfs',
   'game2':'spiderman'
}

// for (const [key,value] of myObject) {
//    console.log();
// }