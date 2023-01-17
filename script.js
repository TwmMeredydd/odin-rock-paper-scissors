const options = ["scissors", "paper", "rock"];
let computerScore = 0, playerScore = 0, done = false;

function genRandom(start, end) {
    return Math.floor(Math.random() * (end-start) + start);
}

function getComputerChoice() {
    return options[genRandom(0, options.length)]
}

function capitaliseFirstLetter(msg) {
    return msg[0].toUpperCase() + msg.substring(1).toLowerCase();
}

function playRound(player) {
    //Determine what computer would win againster
    let computer = getComputerChoice();
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

function addLogEntry(msg) {
    entry = document.createElement("li");
    entry.innerText = msg;
    document.getElementById("log").appendChild(entry);
}

function processRound(choice) {
    if (done) return;

    let round = playRound(choice);
    addLogEntry(round);

    if (round.startsWith("You win!")) {
        playerScore++;
    } else if (round.startsWith("You lose!")) {
        computerScore++;
    }

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;

    if (computerScore >= 5) {
        document.getElementById("result").innerText = "The Computer Wins!";
        done = true;
    } else if (playerScore >= 5) {
        document.getElementById("result").innerText = "You Win!";
        done = true;
    }
}

document.querySelector("#selection").childNodes.forEach(e => e.addEventListener("click", () => processRound(e.id)));
