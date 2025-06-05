//array =  a variable like structure that can hold more thane 1 value 

// let fruit = [`apple`,`orange`,`bannana`];
// fruit.sort().reverse();
//  fruit.push(`grape`);
//  console.log(fruit);

// fruit.push(`mango`);
// fruit.pop();
// fruit.shift();
// fruit.unshift(`kiwi`);


// let numOfFruits = fruit.length;
// let index = fruit.index("apple");

// for (let fr of fruit){
//   console.log(fruit);
// }
// console.log(index);

//2d array = muli dimensional array that stores a matrix of data in rows and colomns useful for storing data in a grid format,games
const matrix = [
    [1, 2, 3],  
    [4, 5, 6],  
    [7, 8, 9],
    ['*',0,'#']
]
// matrix[0][1] = 'X';
// matrix[0][1] = 'O';
// matrix[1][1] = 'X';

// matrix[1][0] = 'O';
// matrix[2][2] = 'X';
// matrix[2][0] = 'O';
// matrix[2][1] = 'X'; 
// matrix[0][2] = 'O';

for (let row of matrix){
    const rowString = row.join(` `);
    console.log(row);
}