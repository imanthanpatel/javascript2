//number game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum + 1) + minNum);


let attempts = 0;
let guess;
let running = true;

while(running ){
        guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
        guess = Number(guess);
        // console.log(typeof guess,guess);
        if(isNaN(guess)){
            window.alert("Please enter a valid number");
        }
        else if (guess < minNum || guess > maxNum){
            window.alert(`please enter a valid number`)
        }
        else{
            attempts++;
            if (guess < answer){
                alert(`too low ,try again`);

            }
            else if(guess > answer){
                alert(`too high, try again`);
            }
            else{
                
                alert(`congratulations! you guessed the number ${answer} in ${attempts} attempts`);
                running = false;
            }

        }




    
}