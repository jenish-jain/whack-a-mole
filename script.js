var holeId;
var pickedhole;
var gameTime = 0;
var currentScore = 0;
var highScore = 0;
var newMoleTime = 1000; // time for a new mole to come out
var OutTime = 0.5 * newMoleTime;

var hole = document.getElementsByClassName("holes")
console.log(hole);
var numberOfHoles = hole.length;
console.log(numberOfHoles);


function holepicker() {
    pickedhole = Math.floor(Math.random() * numberOfHoles);
    return pickedhole;
}

function startGame() {
    timer = setInterval(moleout, newMoleTime);
    gameTime = 0;
    currentScore = 0;
    document.getElementById('clock').innerText = gameTime;
    document.getElementById('currentScore').innerText =currentScore
    document.getElementById('startbtn').disabled = true;
}

function moleout() {
    holepicker();
    hole[pickedhole].style.background = "#a23131";
    hole[pickedhole].innerText = "🦔";
    gameTime++;
    document.getElementById('clock').innerText = gameTime;
    moleOutTime = setInterval(refresh, OutTime)
}

function refresh() {
    hole[pickedhole].style.background = "#a1dd70";
    hole[pickedhole].innerText = " ";
    clearInterval(moleOutTime);

}

function whackCheck(event) {
    // if target event is same as picked hole increase score
    if (event.target == hole[pickedhole]) {
        currentScore++;
        document.getElementById("currentScore").innerText = currentScore;

        if(newMoleTime >100){
            newMoleTime = 1000 - Math.floor(currentScore/20)*50;
            console.log(newMoleTime);       // the game becoemes gradually tougher as you score higher
        }
        
    }
    else {
        clearInterval(timer);
        gameTime = 0;
        document.getElementById('startbtn').disabled = false;
        alert("GAME OVER  \n your score is " + currentScore);

        if(currentScore > highScore)
        {
            document.getElementById('highScore').innerText = currentScore;// current score is high score
        }
    }
}
// adding event listner to class holes
for (holeId = 0; holeId < numberOfHoles; holeId++) {
    var currentHole = hole[holeId];
    currentHole.addEventListener('click', whackCheck);
}