//method chaining = calling one method after another in one continous line of code.

//  no method chaining

// let usern = prompt(`Enter Your USer name`);

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extchar = username.slice(1);
// extchar = extchar.toLowerCase();
// username = letter + extchar;

// console.log(username);

//----Method CHAINING -------//
let username = prompt("Enter your username").trim();
username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

console.log(username);
