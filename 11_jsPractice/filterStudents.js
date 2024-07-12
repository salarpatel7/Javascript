const STUDENTS=[
    {
        age:10
    },
    {
        age:20
    },
    {
        age:22
    },
    {
        age:23
    },
    {
        age:12
    },
    
]

function filterAge(STUDENTS ,age){
    const newArr=[]
    for (let studnet of STUDENTS){
        if(studnet.age>=age){
        newArr.push(studnet)

        }
    }

    return newArr
}

console.log(filterAge(STUDENTS,45));
