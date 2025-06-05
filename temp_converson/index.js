const textbox= document.getElementById("textbox");
const toFaharenite = document.getElementById("toFahrenhite");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;




function convert(){
    if(toFaharenite.checked){
        temp = Number(textbox.value);
        temp = temp *9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32 ) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";

    }
    else{
        result.textContent = `plese selecte a unit`
    }

}