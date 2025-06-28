// RAndom password Genrator
function genratePassword(length,includeLowercase,includeUppercase,includeNumber,includeSymbols){
    const LowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const UppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NumberChars = '0123456789';
    const SymbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? LowercaseChars : '';
    allowedChars += includeUppercase ? UppercaseChars : '';
    allowedChars += includeNumber ? NumberChars : '';
    allowedChars += includeSymbols ? SymbolChars : '';
    // console.log(allowedChars);  
    if(length <= 0){
        return (`password length must be atleast 1`);
    } 
    if(allowedChars.length === 0){
        return (`Atleast one type of character must be selected`);
    } 
    for(let i = 0; i<length;i++){
        const randomIndex = Math.floor(Math.random() *allowedChars.length);
        password += allowedChars[randomIndex];

    }
    return password;
}


const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = genratePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols);

console.log(`genrated Password : ${password}`);