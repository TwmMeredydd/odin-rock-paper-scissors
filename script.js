const options = ["scissors", "paper", "rock"];

function genRandom(start, end) {
    return Math.floor(Math.random() * (end-start) + start);
}

function getComputerChoice() {
    return options[genRandom(0, options.length-1)]
}

function capitaliseFirstLetter(msg) {
    return msg[0].toUpperCase() + msg.substring(1).toLowerCase();
}

function playRound(computer, player) {
    //Determine what computer would win against
    let beats = options[(options.findIndex(i => i == computer.toLowerCase()) + 1) % options.length];

    switch (player.toLowerCase()) {
        case beats:
            return `You lose! ${capitaliseFirstLetter(computer)} beats ${capitaliseFirstLetter(player)}.`;
        case computer.toLowerCase():
            return "It's a draw!"
        default:
            return `You win! ${capitaliseFirstLetter(player)} beats ${capitaliseFirstLetter(computer)}.`;
    }
}

function game() {
    let computer = 0, player = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = "";
        do {
            playerChoice = prompt("Rock, Paper or Scissors?")
        } while (!options.includes(playerChoice.toLowerCase()))

        let round = playRound(getComputerChoice(), playerChoice);
        console.log(round)

        if (round.startsWith("You win!")) {
            player++;
        } else if (round.startsWith("You lose!")) {
            computer++;
        }
    }
    console.log(`Computer: ${computer}, Player: ${player}`)
}

game();
