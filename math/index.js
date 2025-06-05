
// // let z = Math.round(x);
// // let z = Math.floor(x);
// // let z = Math.ceil(x);
// // let z = Math.trunc(x);
// // let z = Math.pow(x,y);
// // let z = Math.sqrt(x,y);
// // let z = Math.sqrt(x,y);
// // let z = Math.sign(x,y);
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max-min)) + min;









// window.alert(`${randomNum}`);


const mybtn = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min =1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
mybtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    mylabel.textContent = `Random Number: ${randomNum1}`;
    mylabel2.textContent = `Random Number: ${randomNum2}`;
    mylabel3.textContent = `Random Number: ${randomNum3}`;
}