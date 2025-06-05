function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const value = [];
    const images = [];

    for (let i =0;i < numOfDice; i++ ){
        const randomValue = Math.floor(Math.random() * 6) +1;
        value.push(randomValue);
        images.push(`<img src="img/${value}.png"  alt="dice ${value}">`);
      
    }
    diceResult.textContent = `dice : ${value.join(', ')}`;
    diceImage.innerHTML = images.join(' ');
}