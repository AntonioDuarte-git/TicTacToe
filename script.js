/* Aquí es el turno de que la máquina eliga una opción */
function getComputerChoice() {
    const choices = ["Piedra", "Papel", "Tijeras"];
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

console.log(getComputerChoice());

/* Aquí es el turno de que el usuario introduzca una opción */
function getHumanChoice() {
    const validChoices = ["Piedra", "Papel", "Tijeras"];
    let inputChoice = prompt("Por favor elige Piedra, Papel o tijera ").trim();

    
    inputChoice = inputChoice.charAt(0).toUpperCase() + inputChoice.slice(1).toLowerCase();
    /* inputChoice es igual a inputChoice si el primer caracter de todo es mayúscula más lo demás en minúsculas */


    if (validChoices.includes(inputChoice)) {
        return inputChoice;
    } else {
        alert("Elección inválida. Por favor elige Piedra, Papel o Tijera.");
        return getHumanChoice();
    }
}

    
    console.log(getHumanChoice());

     /* Puntación*/

     let humanScore = 0;
     let computerScore = 0;
     
     

     function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "Piedra" && computerChoice === "Tijeras") ||
            (humanChoice === "Papel" && computerChoice === "Piedra") ||
            (humanChoice === "Tijeras" && computerChoice === "Papel") 
            
        ) {
            humanScore++;
            return `Ganaste esta ronda! ${humanChoice} vence a ${computerChoice}.`;
        } else if (
            (computerChoice === "Piedra" && humanCopice === "Tijeras") ||
            (computerChoice === "Papel" && humanChoice === "Piedra") ||
            (computerChoice === "Tijeras" && humanChoice === "Papel") 
        ) {
            computerScore++;
            return `Perdiste esta ronda! ${computerChoice} vence a ${humanChoice}.`;
        } else {
            return `Empate! Ambos eligieron ${humanChoice}.`;
        }
     }
     
     // Cinco Rondas
     function playGame() {
        // Variables de puntuación dentro de playGame
        let humanScore = 0;
        let computerScore = 0;
    
        // Jugar 5 rondas

        for (let round = 1; round <= 5; round++) {
            console.log(`Ronda ${round}:`);

            // Obtener elecciones 
            const humanSelection = getHumanChoice(); // Llama a la función para obtener la elección del humano
            const computerSelection = getComputerChoice(); //Llama a la función pra obtener la elección de la computadora

            // Jugar una ronda
            const result = playRound(humanSelection, computerSelection);

            // Mostrar el resultado de la ronda
            console.log(result);

            // Mostrar el resultado de la ronda
            console.log(result);

            // Actualizar el puntuaje basado en el resultado
            if (result.includes("Ganaste")) {
                humanScore++;
            } else if (result.includes("Perdiste")) {
                computerScore++;
            }

            // Mostrar el puntaje actual
            console.log(`Puntaje hasta ahora: Humano ${humanScore} - Computadora ${computerScore}`);
            console.log("--------------------------");



        }

        // Resultado final del juego
        console.log("Juego terminado!");
        if (humanScore > computerScore) {
            console.log(`¡Felicidades! Ganaste el juego con un puntaje de ${humanScore} a ${computerScore}.`);
        } else if (computerScore > humanScore) {
            console.log(`Lo siento, perdiste el juego. La computadora ganó ${computerScore} a ${humanScore}.`);
        } else {
            console.log("¡Es un empate! Ambos tienen el mismo puntaje.");
        }

    }
    
    
     // Ejecución del juego
     const humanSelection = getHumanChoice(); // Llama a la función para obtener la elección del humano
     const computerSelection = getComputerChoice(); // Llama a la función para obtener la elección de la computadora

     console.log(playRound(humanSelection, computerSelection)); // Imprime resultado de la ronda
     console.log(`Puntaje: Humano ${humanScore} - Computadora ${computerScore}`);
     