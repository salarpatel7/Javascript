const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const sc in myObject) {
   console.log(`${sc} is shortcut of ${myObject[sc]}`);
}

const programming = ['js','py','cpp','java']
for(const key in programming){
    console.log(programming[key]);
}