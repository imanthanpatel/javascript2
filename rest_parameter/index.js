//rest parameter - (...rest) allow a function work with a variable number of argument by bundling them into an arrey 
//               spread =  expand an array into seprate elements 
//               rest = bundles seprate element into array
// function opeanFridger(...foods){
//     console.log(foods);
// }
// // function getfood(...foods){
// //     return foods;
// // }

// const food1 = "pizza";
// const food2 = "burgur";
// const food3 = "pasta";

//  const foods  = opeanFridger(food1, food2, food3); // [ 'pizza', 'burgur', 'pasta' ]
// // const foods = getfood(food1, food2, food3);
// console.log(foods); // [ 'pizza', 'burgur', 'pasta' ]
// function sum(...numbers){
    

//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }

// function getAvg(...numbers){
    

//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result / numbers.length;

// }

// const total = getAvg(10, 20, 30, 40, 50); // 30
// console.log(total); // 30
function combineString(...strings) {
    return strings.join(" ");
}

const full = combineString("mr","Manthan","patel")

console.log(full);