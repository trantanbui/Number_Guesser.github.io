let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// 1
const generateTarget = () => Math.floor(Math.random() * 9 + 1);
// 2
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    // 6
    if ((humanGuess < 0) && (humanGuess > 9)) {
        alert("The number is out of range!. Please enter the number between 0 and 9");
    }
    const humanDistance = Math.abs(humanGuess - secretTarget);
    const computerDistance = Math.abs(computerGuess - secretTarget);
    if (humanDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
};
// 3
const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
};
// 4 
const advanceRound = () => {
    currentRoundNumber ++;
} 
