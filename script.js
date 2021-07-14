
let a = "";
function computerPlay() {
    var option =
        ["rock", "paper", "scissor"];
    var a = Math.floor(Math.random() * option.length);


    return option[a];
}

function versus(playerSelection, computerSelection) {
    a = playerSelection;


    let pSelected = a.toLowerCase();

    let cSelection = computerSelection();

        console.log(cSelection);
    if (pSelected == cSelection) {
        console.log("Draw");
    }
    else if (
        (pSelected == 'rock' && cSelection == 'scissor') ||
        (pSelected == 'paper' && cSelection == 'rock') ||
        (pSelected == 'scissor' && cSelection == 'paper')
    ) {
        console.log('you won');
    }
    else{
        console.log('you lose');
    }
}

function game(){

    for(i=1;i<=5;i++){
       let choice  = window.prompt('Enter your choice',"");
       versus(choice,computerPlay);

    }
}