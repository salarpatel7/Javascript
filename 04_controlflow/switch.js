// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;                        //breaks stops control flow 

    default:
        console.log("default case match");
        break;
}

const days = "sunday" 

switch (days) {
    case "monday":
        console.log("monday");
        break;
    case "sunday":
        console.log("sunday");
        break;
                          //breaks stops control flow 

    default:
        console.log("default case match");
        break;
}