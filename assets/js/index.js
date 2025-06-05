// // // document.getElementById("hii").textContent = `hello`;
// // // document.getElementById("p").textContent = `this is a paragraph`;

// // let x,y;
// // x=100;
// // y=200;
// // console.log(x+y);

// // //Date type in js
// // //number, string, boolean, null, undefined, object, symbol
// // // let online =true;
// // // console.log(`bro is online ${online}`)// number

// // // let fullName = "John Doe"; // string
// // // let age = 30; // number
// // // let student = true; // boolean
// // // document.getElementById("p1").textContent = `your name is ${fullName}`;
// // // document.getElementById("p2").textContent = `your age is ${age}`;
// // // document.getElementById("p3").textContent = `are you a student ${student}`;
// // //arithmetic operator - operands (values,variable,etc.)
// // //           operator (+,-,*,/)
// // document.getElementById("hii").textContent = `Arithmetic Operators`;
// // let student = 30;
// // student = student +1;
// // document.write(`Total number of students are ${student} <br>`);
// // student = student - 1;
// // document.write(`Total number of students are ${student} <br>`);
// // student = student * 2;      
// // document.write(`Total number of students are ${student} <br>`);
// // student = student / 2;
// // document.write(`Total number of students are ${student} <br>`);
// // student = student**2;
// // document.write(`Total number of students are ${student} <br>`); 
// // // let extstudent = student % 3;
// // // document.write(`Total number of students are ${extstudentstudent} <br>`);

// // let result= 6/2 ** 7;// student = student + 1
// // console.log(`Result is ${result} <br>`);
// // // document.getElementById("hii2").textContent = `Accept User Input`;

// // let username = prompt("Enter your Name ? ");
// // console.log(username);

// let username;

// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("hii").textContent = `Hello ${username}`;


// }

// let age = window.prompt("Enter how old are  you: ");
// age = Number(age);
// age+=1;
// console.log(age, typeof age); 
//   let x ;
//   let y ;
//   let z ;
  
//   x =Number(x);
//   y = String(y)
//   z = Boolean(z)
//   console.log(x, typeof x);
//   console.log(y, typeof y);
//   console.log(z, typeof z);
//const = a variable that can't be changed .extra security measure canot be changed
const PI = 3.14;
let radius;
let circumfrence;
document.getElementById("mySubmit").onclick = function(){
    document.getElementById("myInput").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("h3").textContent = circumfrence + `cm`;
}