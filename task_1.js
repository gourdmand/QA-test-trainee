//  Составить алгоритм: если введенное число больше 7, то вывести “Привет”

const prompt = require('prompt-sync')();
const enteredNumber = prompt(`Enter the number: `);
console.log(`You entered '${enteredNumber}'`);

const enteredNumberRetyped = Number(enteredNumber);
let resultText;

if (isNaN(enteredNumberRetyped)) {
    resultText = `Try again please, you typed not a number`;
}   else    {
    (enteredNumberRetyped > 7) ?
        resultText = `Привет` :
        resultText = `Entered number isn't more than 7`;
}

console.log(resultText)