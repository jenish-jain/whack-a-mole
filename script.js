
let moleId = 0;
// let state = 0;
let id;
let gameTime=60;
let currentScore = 0;


function moleout(){
     moleId = picker();
    //  state = 1;  //  state one signifies mole is outside hole
   console.log(moleId);
// console.log('state :',state, 'moleId :', moleId);
    var mole = document.getElementById(moleId);
    mole.style.background = "#a23131";
    mole.innerText= "🦔"
    moleOutTime = setInterval(refresh,800);

    gameTime--;
    document.getElementById("clock").innerText= gameTime;
    if(gameTime==0){
        clearInterval(timer);
        document.getElementById('startbtn').disabled = false;
    }

}
function picker(){
var pickedNum = Math.floor(Math.random() * 9)+1;
return pickedNum;
}

function refresh (){
    // state = 0;  //  state one signifies mole is inside hole
    // console.log('state :',state, 'moleId :', moleId);
    var mole = document.getElementById(moleId);
    mole.style.background = "#a1dd70";
    mole.innerText=" ";
    clearInterval(moleOutTime);
    
}


function startGame(){
    timer = setInterval(moleout,1000);
    gameTime=60;
    currentScore=0;
    document.getElementById('startbtn').disabled = true;
}

function hole(i){
    if(i == moleId){
        currentScore++;
    document.getElementById("currentScore").innerText= currentScore;
    }
}