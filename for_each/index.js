//foreach - method used to iterate over the element of an array and apply a specific function (callback) to eaxch element
//         array.forEach(callback)
//         element , index, array are provided
let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(double);
numbers.forEach(triple);
// numbers.forEach(squre);
numbers.forEach(display);

function double(element,index,array){
    array[index] = element *2;
}
function triple(element,index,array){
    array[index] = element *3;
}
function squre(element,index,array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}