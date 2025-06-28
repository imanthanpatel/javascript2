//eventlistner - listen for specific event to create interavtive web page event : click,mouse,hover,mouserout
//              .addEventListener('event',callback)


const mybox = document.getElementById('mybox');

function changcolor(){
    mybox.addEventListener("click",changcolor);