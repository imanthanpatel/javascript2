//function - create once use as many times as you want
// function happybdy(username) {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear ${username} !");
//     console.log("Happy Birthday to you!");
// }

// happybdy(`manthan`); // call the function
// function add(a,b){
//     let result = a + b;
//     return result;
// }
// let ans = add(2,3); // call the function
// console.log(ans);
//  // 5
// function sub(a,b){
//     let result = a - b;
//     return result;
// }
// let ans1 = sub(2,3); // call the function
// console.log(ans1); 
// // 5
// function mul(a,b){
//     let result = a*b;
//     return result;
// }
// let ans2 = mul(2,3); // call the function
// console.log(ans2); // 5
// function div(a,b){
//     let result = a / b;
//     return result;
// }
// let ans3 = div(2,3); // call the function
// console.log(ans3); // 5

// function iseven(number){
//     return number %2===0 ? true : false;
// }

function isvalid(email){
    return email.includes('@') && email.includes('.') ? true : false;

}
console.log(isvalid(`manthan002408@gmail.com`)); // true