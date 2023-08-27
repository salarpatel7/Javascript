//filter

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newnumbers=nums.filter( (nums)=>{
//     return nums > 4
// })
// console.log(newnumbers);

//or

// const newnumbers = nums.filter( (digit)=> digit >4 )
// console.log(newnumbers);  

//above both o/p::- [ 5, 6, 7, 8, 9, 10 ]

//same example with foreach
// let newarr=[]
// nums.forEach( (num)=>{
//     if(num > 4){
//         newarr.push(num)
//     }
// })
// console.log(newarr);

const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  const maleCharacters= characters.filter( (person)=> person.gender === "male")

//   console.log(maleCharacters);

  const femaleChar = characters.filter((female)=> female.gender ==='female')

  console.log(femaleChar);