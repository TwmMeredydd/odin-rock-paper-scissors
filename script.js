const options = ["Rock", "Paper", "Scissors"];

function genRandom(start, end) {
    return Math.floor(Math.random() * (end-start) + start);
}

function getComputerChoice() {
    return options[genRandom(0, options.length-1)]
}
