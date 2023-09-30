var secretNumber = Math.trunc(Math.random()*20) + 1;
var score = 10;
var highscore = 0;

var message = document.querySelector(".message");
var scoreText = document.querySelector(".score");

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        message.textContent = "No number!";
    }

    else if(guess === secretNumber){
        if(score > highscore){
            highscore = score;
        }

        document.querySelector(".number").textContent = secretNumber;
        message.textContent = "Correct number";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".highscore").textContent = highscore;

    }

    else if(guess > secretNumber){
        checker("high");
    }

    else if(guess < secretNumber){
        checker("low");
    }
})

document.querySelector(".again").addEventListener("click", function(){
    score = 10;
    scoreText.textContent = score;

    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    message.textContent = "Start guessing...";

    secretNumber = Math.trunc(Math.random()*20) + 1;

})
 
function checker(str){
    if(score > 1){
        message.textContent = "That's " + str;
        score--;
        scoreText.textContent = score;
    }
    else { 
        message.textContent = "You lost!!!";
        scoreText.textContent = 0;
    }
}