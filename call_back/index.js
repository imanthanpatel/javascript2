//callback = a function that is passed as an argument to another function

//           use to handel asynchronous operations
//          1.reading file
//          2.network recquest
//          3.intreaction with database
// hello(goodbye);
// function hello(callback){
//     console.log("Hello!");
//     callback()
// }
// function wait(){
//     console.log("wait");
// }

// function leave(){
//     console.log("leave");
// }

// function goodbye(){
//     console.log("goodBye");
// }
sum(displaypage,5,10);

function sum(callback , x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("myhi").textContent = result;
}
