
let a = "";
let scoreOfHuman = 0;
let scoreOfComputer = 0;

let rock, paper, scissor;

const audio1 =$("#mySound")[0]
let Body = document.querySelector("body");
let startButton = document.querySelector("#startButton");
let startContainer = document.querySelector("#startContainer");

Body.style.display = "hidden";
// /startContainer.style.display = "block";

startButton.addEventListener("click",function(){
    startContainer.style.display = "none";
    Body.startContainer = "block";
})

let i = 0;
let txt = "My name is Aditya"
function typeWriter(){
    if(i<txt.length){
        document.getElementById("splashH3").innerHTML += txt.charAt(i);
        i++;
        audio1.play();
        setTimeout(typeWriter,5);
    }

}
typeWriter();

let imgElememts = document.querySelector("#rock");
console.log(imgElememts);
;
function playNote(){
    audio1.play();
}
gameButtons = document.querySelectorAll(".optionDiv").forEach(item => {
    item.addEventListener("mouseover", playNote);
})


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
        outputText.textContent = `You win , you chose ${pSelected} and computer chose ${cSelection}`;

        scoreOfHuman++;
        humanScore.textContent = `${scoreOfHuman}`;
        if (scoreOfHuman === 5) {
            alert("You won")
        }
    }
    else {
        outputText.textContent = `you lose , you chose ${pSelected} and computer chose ${cSelection}`;
        let c = 0;

        scoreOfComputer++;
        computerScore.textContent = `${scoreOfComputer}`;
        if (scoreOfComputer === 5) {
            alert("You lost , the computer won")
        }
    }
}

// function game(){

//     for(i=1;i<=5;i++){
//        let choice  = window.prompt('Enter your choice',"");
//        versus(choice,computerPlay);

//     }
