let userScore = 0;
let computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const score_board = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const sezer_div = document.getElementById("sezer");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'sezer'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === 'rock') {
        return "Rock";
    }
    if (letter === 'paper') {
        return "Paper";
    }
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    let userWord = "(user)";
    let computerWord = "(computer)";
    result_p.innerHTML = `${convertToWord(userChoice)} ${(userWord)} beats ${convertToWord(computerChoice)} ${(computerWord)} you win! 🔥 `;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("green-glow");
    }, 2000);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    let userWord = "(user)";
    let computerWord = "(computer)";
    result_p.innerHTML = `${convertToWord(userChoice)} ${(userWord)} loses to ${convertToWord(computerChoice)} ${(computerWord)} you lost! 😔`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("red-glow");
    }, 2000);
}
function draw(userChoice, computerChoice) {
    let userWord = "(user)";
    let computerWord = "(computer)";
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} ${(userWord)} equals ${convertToWord(computerChoice)} ${(computerWord)} It's a draw..try again! 😊 `;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("gray-glow");
    }, 2000);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rocksezer":
        case "paperrock":
        case "sezerpaper":
            win(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "papersezer":
        case "sezerrock":
            lose(userChoice, computerChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "sezersezer":
            draw(userChoice, computerChoice);
            break;

    }

}
function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })
    paper_div.addEventListener('click', function () {
        game("paper");
    })
    sezer_div.addEventListener('click', function () {
        game("sezer");
    })

}
main();