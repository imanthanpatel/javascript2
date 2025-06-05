//counter function
const incrementbtn = document.getElementById("increment");
const decrementbtn = document.getElementById("decrement"); 
const reset = document.getElementById("reset");
const countlable = document.getElementById("lable");
let count = 0;

increment.onclick = function(){
    count++;
    countlable.textContent = count;
}
decrement.onclick = function(){
    count--;
    countlable.textContent = count;
}
reset.onclick = function(){
    count= 0;
    countlable.textContent = count;
}