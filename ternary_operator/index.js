//ternary operator = a short cut to if and else statemant
// let age = 0;
// let msg = age >= 18 ? "you are an adult" : "you are a minor";
// console.log(msg);

// let time = 16;
// let greeting = time < 12 ? "Good Morning" : "Good aftrnoon";
// console.log(greeting);

// let isstudent= true;
// let msg = isstudent ? "You are a student" : "You are not a student";
// console.log(msg);

 let purchacement = 125;
 let discount = purchacement > 100 ? 0.1 : 0.05;
 let total = purchacement - (purchacement * discount);  
 console.log(`Total after discount: $${total.toFixed(2)}`);