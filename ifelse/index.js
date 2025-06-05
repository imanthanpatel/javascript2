const myText = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const myresult = document.getElementById("result");
 
let age 
mysubmit.onclick = function(){
    age = myText.value;
    age= Number(age);

    if (age >= 18) {
    
    myresult.textContent = `you are old enough to vote`;
    }
else if(age==0){
    
    myresult.textContent = `you cannt enter`
}
else if(age>=100){
   
    myresult.textContent = `woooooooow you are really old`;
}
else if(age  < 0){
    
    myresult.textContent = `you are not born yet`;

} 
else {
    
    myresult.textContent = `you are not old enough to vote`;
}
}
