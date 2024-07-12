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

// function filterAge(STUDENTS ,age){
//     const newArr=[]
//     for (let studnet of STUDENTS){
//         if(studnet.age>=age){
//         newArr.push(studnet)

//         }
//     }

//     return newArr
// }

// console.log(filterAge(STUDENTS,45));

// console.log(
    
// STUDENTS.filter(
//     (student)=>{
//         return student.age>=20
//     }
// )
// )

const people = [
    { name: "Alice", age: 30, department: "Engineering" },
    { name: "Bob", age: 25, department: "Marketing" },
    { name: "Charlie", age: 35, department: "Engineering" },
  ];
  newarry=[]
 const filtersEng=people.filter((engineers)=>engineers.department==="Engineering")
  
  console.log(filtersEng);
  // Output: [{ name: "Alice", age: 30, department: "Engineering" }, { name: "Charlie", age: 35, department: "Engineering" }]