let game = ["r", "p", "s"]

// Generates random index from game
gameChoice = game[Math.floor(Math.random()*game.length)];
console.log(gameChoice)

// Statistics
let wins = 0;
let losses = 0;
let ties = 0;


let goPlay = function(){
    let playerChoice = prompt("Choose 'r', 'p', or 's'.")

    if (playerChoice == gameChoice){
            alert("It's a Tie!")
            ties = ties ++

    } else if (
        playerChoice == "r" && gameChoice == "s"||
        playerChoice == "p" && gameChoice == "r"||
        playerChoice == "s" && gameChoice == "p"
        ){
            alert("Computer chose " + gameChoice)
            alert("You Win!")
    } else {
            alert("Computer chose " + gameChoice)
            alert("You lose!")
        }
   
    



}

goPlay()