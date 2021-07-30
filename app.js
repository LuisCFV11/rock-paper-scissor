 let userScore = 0;
 let computerScore = 0;
 const userScore_span = document.getElementById("puntuacion-usuario");
 const computerScore_span = document.getElementById("puntuacion-computadora");
 const scoreBoard_div = document.querySelector(".marcador");
 const result_p =  document.querySelector(".resultado > p");
 const piedra_div = document.getElementById("r");
 const papel_div = document.getElementById("p");
 const tijera_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}
function cambiarPalabra(letter) {
    if (letter === "r") return "Piedra";
    if (letter === "p") return "Papel";
    if (letter === "s") return "Tijera";
    }
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "jugador".fontsize(2).sup();
    const smallCompWord = "computadora".fontsize(2).sup();
    result_p.innerHTML = `${cambiarPalabra(userChoice)}${smallUserWord} vence a ${cambiarPalabra(computerChoice)}.${smallCompWord} Ganaste!`;
    const userChoice_div = document.getElementById(userChoice);
    document.getElementById(userChoice).classList.add('selector-verde')
    setTimeout(() => userChoice_div.classList.remove('selector-verde'), 300);

}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "jugador".fontsize(2).sup();
    const smallCompWord = "computadora".fontsize(2).sup();
    result_p.innerHTML = `${cambiarPalabra(userChoice)}${smallUserWord} pierde contra ${cambiarPalabra(computerChoice)}.${smallCompWord} Perdiste!`;
    const userChoice_div = document.getElementById(userChoice);
    document.getElementById(userChoice).classList.add('selector-rojo')
    setTimeout(() => userChoice_div.classList.remove('selector-rojo'), 300);
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "jugador".fontsize(2).sup();
    const smallCompWord = "computadora".fontsize(2).sup();
    result_p.innerHTML = `${cambiarPalabra(userChoice)}${smallUserWord} es igual a ${cambiarPalabra(computerChoice)}.${smallCompWord} Nadie gana!`;
    const userChoice_div = document.getElementById(userChoice);
    document.getElementById(userChoice).classList.add('selector-gris')
    setTimeout(() => userChoice_div.classList.remove('selector-gris'), 300);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "sr":
        draw(userChoice, computerChoice);
        break;
    }

}

 function main() {
     piedra_div.addEventListener('click', () => game("r"));
     papel_div.addEventListener('click', () => game("p"));
     tijera_div.addEventListener('click', () => game("s"));
 }

main();
