

function computerPlay(){
    var option =
    ["rock","paper","scissor"];
    var a =Math.floor(Math.random()*option.length);
    
    return option[a];
}

function versus(playerSelection){
        a = playerSelection;
        console.log(computerPlay);
        let cSelection = computerPlay;
        
        if(a == cSelection){
            console.log("Draw");
        }
        else{
            console.log('you win');
        }
    }