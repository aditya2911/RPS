// helper variable for iterating and initializing
let a = "";
let scoreOfHuman = 0;
let scoreOfComputer = 0;

let rock, paper, scissor;

let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

// finding and initializing audio
const audio1 = $("#mySound")[0]
const soundSelect = $("#soundSelect")[0];
const introMusic = $("#introMusic")[0];
introMusic.loop = true;
introMusic.volume = 0.5;
soundSelect.volume = 0.3;
audio1.volume = 0.3;

// initializing
let Body = document.querySelector("body");
let startButton = document.querySelector("#startButton");
let startContainer = document.querySelector("#startContainer");

let endScreen = document.querySelector("#endScreen");

let endScreenOutput = document.querySelector("#endScreenOutput");

// setting the display property of our startContainer , body and endScreen to display it accordingly
Body.style.display = "hidden";
endScreen.style.display = "none";

startButton.addEventListener("click", function () {
    startContainer.style.display = "none";
    Body.startContainer = "block";
    introMusic.play();
})


// animation for our startContainer
let i = 0;
let txt = "Start Game"
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("splashH3").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, 200);
    }

}
typeWriter();





// helper method to play on hover and click
function playNote() {
    audio1.load();
    audio1.play();
    console.log(audio1);
}
function soundPlay() {
    soundSelect.load();
    if (audio1.duration > 0 || !audio1.paused) {
        audio1.pause();
        audio1.currentTime = 0;
        soundSelect.play();
    }
    soundSelect.play();
    console.log(soundSelect);
}

// setting to play sound on hover and click
gameButtons = document.querySelectorAll(".optionDiv").forEach(item => {
    item.addEventListener("mouseover", playNote);
})
gameButtons1 = document.querySelectorAll(".optionDiv").forEach(item => {
    item.addEventListener("click", soundPlay);


})

// helper method to reload the game 
function endGameReload() {
    window.location = "index.html"
}

// finding and initializing reload button to replay the game
let endReloadButton = document.getElementById("endReloadButton");
endReloadButton.addEventListener('mouseover', function () { playNote(); });
endReloadButton.addEventListener('click', function () { endGameReload() });


// initialzing and setting to play audio on click
rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissor = document.getElementById('scissor');

rock.addEventListener('click', function () { versus("rock") });
paper.addEventListener('click', function () { versus("paper") });
scissor.addEventListener('click', function () { versus("scissor") });



// computer  option randomizer to act as opponent for player
function computerPlay() {
    var option =
        ["rock", "paper", "scissor"];
    var a = Math.floor(Math.random() * option.length);


    return option[a];
}


// helper method to decide who won and assign point respectively
function versus(playerSelection) {
    a = playerSelection;
    let outputText = document.querySelector("#outputText");
    let humanScore = document.querySelector("#humanNumero");
    let computerScore = document.querySelector("#computerNumero");

    //player variable
    let pSelected = a.toLowerCase();

    // compueter variable
    let cSelection = computerPlay();

    console.log(cSelection);
    if (pSelected == cSelection) {
        outputText.textContent = "Draw";
    }
    else if (
        (pSelected == 'rock' && cSelection == 'scissor') ||
        (pSelected == 'paper' && cSelection == 'rock') ||
        (pSelected == 'scissor' && cSelection == 'paper')
    ) {


        outputText.textContent = `you win , you chose ${pSelected} and computer chose ${cSelection}`;
        scoreOfHuman++;
        humanScore.textContent = `${scoreOfHuman}`;
        // if point = 5 display endscreen with reload button
        if (scoreOfHuman === 5) {
            Body.style.display = "hidden";
            endScreen.style.display = "flex";
            endScreenOutput.textContent = "You won  "
        }
    }
    else {


        outputText.textContent = `you lose , you chose ${pSelected} and computer chose ${cSelection}`;
        let c = 0;

        scoreOfComputer++;
        try {
            computerScore.textContent = `${scoreOfComputer}`;
        }
        finally {
            document.getElementById("outputText").textContent += ""
        }
        // if point = 5 display endscreen with reload button
        if (scoreOfComputer === 5) {
            Body.style.display = "hidden";
            endScreen.style.display = "flex";
            endScreenOutput.textContent = "You lost  "

        }
    }
}

