
// console.log(userName.charAt(0)); 
// console.log(userName.indexOf(`n`));
//.lastIndexOf() returns the last occurrence of a specified value in a string.
//.length calclute length of string 
// console.log(userName.trim()); 
// .upperCase() converts all characters in a string to uppercase.
//.startsWith() checks if a string starts with a specified value.
//.endsWith() checks if a string ends with a specified value.
// .includes() checks if a string contains a specified value.
// .slice() extracts a section of a string and returns it as a new string.
// .substring() extracts characters from a string between two specified indices.
//.replace() replaces a specified value with another value in a string.
// .split() splits a string into an array of substrings based on a specified separator. 
// .toLowerCase() converts all characters in a string to lowercase.
// .toUpperCase() converts all characters in a string to uppercase. 
//.replaceAll() replaces all occurrences of a specified value in a string with another value.
// .search() searches a string for a specified value and returns the position of the match.
//.padStart() pads the current string with another string until it reaches a specified length, starting from the beginning.
// .padEnd() pads the current string with another string until it reaches a specified length, starting from the end.
// .repeat() returns a new string with a specified number of copies of the original string.
//slice method 
// const fullName = `manthan PAtel`;
// let firstName = fullName.slice(0,fullName,indexOf(` `));
// let lastName = fullName.slice(fullName.indexOf(``));
// console.log(firstName)
const email = `manthan002408@gmail.com`;


let userName = email.slice(0,email.indexOf(`@`));
let extention = email.slice(email.indexOf(`@`));

console.log(userName);
console.log(extention);