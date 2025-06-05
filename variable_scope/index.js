//variable scope -where a variable is recognoized and accessible (local vs global)
let x = 5; // global variable not recommended naming conflict
// function1();
// function2();
function function1(){
    let x = 10; // local variable
    console.log(x);
}

function function2(){
    let y = 20;
    console.log(y);


}
function1();
function2();
