
let a = "";
let scoreOfHuman = 0;
let scoreOfComputer = 0;

let rock ,paper , scissor;

function Clicked(option){
    alert('you just clicked '+option);
}

rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissor = document.getElementById('scissor');

rock.addEventListener('click',function(){versus("rock")});
paper.addEventListener('click',function(){versus("paper")});
scissor.addEventListener('click',function(){versus("scissor")});


// computer option randomizer
function computerPlay() {
    var option =
        ["rock", "paper", "scissor"];
    var a = Math.floor(Math.random() * option.length);


    return option[a];
}

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
        outputText.textContent =`You win , you chose ${pSelected} and computer chose ${cSelection}`;
        
        scoreOfHuman++;
        humanScore.textContent = `${scoreOfHuman}`;
    }
    else{
        outputText.textContent = `you lose , you schose ${pSelected} and computer chose ${cSelection}`;
        let c = 0;

        scoreOfComputer++;
        computerScore.textContent = `${scoreOfComputer}`;
    }
}

// function game(){

//     for(i=1;i<=5;i++){
//        let choice  = window.prompt('Enter your choice',"");
//        versus(choice,computerPlay);

//     }
