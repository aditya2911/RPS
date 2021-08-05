
let a = "";
let scoreOfHuman = 0;
let scoreOfComputer = 0;

let rock, paper, scissor;

let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

const audio1 = $("#mySound")[0]
const soundSelect = $("#soundSelect")[0];
const introMusic = $("#introMusic")[0];
introMusic.loop = true;
introMusic.volume = 0.5;
soundSelect.volume =0.3;
audio1.volume = 0.3;

let Body = document.querySelector("body");
let startButton = document.querySelector("#startButton");
let startContainer = document.querySelector("#startContainer");

let endScreen = document.querySelector("#endScreen");

let endScreenOutput = document.querySelector("#endScreenOutput");

Body.style.display = "hidden";
// /startContainer.style.display = "block";
endScreen.style.display = "none";

startButton.addEventListener("click", function () {
    startContainer.style.display = "none";
    Body.startContainer = "block";
    introMusic.play();
})

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

let imgElememts = document.querySelector("#rock");
console.log(imgElememts);
;
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
gameButtons = document.querySelectorAll(".optionDiv").forEach(item => {
    item.addEventListener("mouseover", playNote);
})
gameButtons1 = document.querySelectorAll(".optionDiv").forEach(item => {
    item.addEventListener("click", soundPlay);


})

function endGameReload(){
  window.location = "index.html"
}

let endReloadButton = document.getElementById("endReloadButton");
endReloadButton.addEventListener('mouseover',function(){playNote();});
endReloadButton.addEventListener('click',function(){endGameReload()});






// audioplay = $(".optionDiv").mouseover.array.forEach(element => {

// });( function(){audio1.play();});
// function playNote() {

//     console.log(audio1);
//     audio1.play();
// }
rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissor = document.getElementById('scissor');

rock.addEventListener('click', function () { versus("rock") });
paper.addEventListener('click', function () { versus("paper") });
scissor.addEventListener('click', function () { versus("scissor") });


// computer option randomizer
function computerPlay() {
    var option =
        ["rock", "paper", "scissor"];
    var a = Math.floor(Math.random() * option.length);


    return option[a];
}

// function playSound(){
//     rock1 = document.getElementById('rock');
//     document.querySelector("#rock").addEventListener("mouseenter",function() {
//         audio1.play();
//       });
//     }

// $("#rock").addEventListener("mouseenter",function(){ 
//     audio1.play();
// })

function versus(playerSelection) {
    a = playerSelection;
    let outputText = document.querySelector("#outputText");
    let humanScore = document.querySelector("#humanNumero");
    let computerScore = document.querySelector("#computerNumero");

    let pSelected = a.toLowerCase();

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
        // let WtextContent = `You win , you chose ${pSelected} and computer chose ${cSelection}`;
        // document.getElementById("outputText").textContent = ""
        //     function win() {
        //         if (winCounter < WtextContent.length) {
        //             console.log("win is called")

        //             document.getElementById("outputText").textContent += WtextContent.charAt(winCounter);
        //             winCounter++;
        //             audio1.play();
        //             setTimeout(win, 100);


        //         }
        //         if(winCounter == WtextContent.length-1){
        //             document.getElementById("outputText").textContent = ""
        //         }


        // }

        outputText.textContent = `you win , you chose ${pSelected} and computer chose ${cSelection}`;
        scoreOfHuman++;
        humanScore.textContent = `${scoreOfHuman}`;
        if (scoreOfHuman === 5) {
            Body.style.display = "hidden";
            endScreen.style.display = "flex";
            endScreenOutput.textContent = "You won  "
        }
    }
    else {

        //document.getElementById("outputText").nodeValue = ""
        outputText.textContent = `you lose , you chose ${pSelected} and computer chose ${cSelection}`;
        let c = 0;

        scoreOfComputer++;
        try {
            computerScore.textContent = `${scoreOfComputer}`;
        }
        finally {
            document.getElementById("outputText").textContent += ""
        }
        if (scoreOfComputer === 5) {
            Body.style.display = "hidden";
            endScreen.style.display = "flex";
            endScreenOutput.textContent = "You lost  "

        }
    }
}

// function game(){

//     for(i=1;i<=5;i++){
//        let choice  = window.prompt('Enter your choice',"");
//        versus(choice,computerPlay);

//     }
