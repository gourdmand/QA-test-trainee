//  Составить алгоритм: если введенное число больше 7, то вывести “Привет”

const prompt = require('prompt-sync')();

const enteredValue = prompt('Enter the number: ');
const enteredValueConverted = Number(enteredValue);

if (isNaN(enteredValueConverted)) {
    console.log(`Try again please, you typed not a number (you entered "${enteredValue}")`);
} else if (!enteredValue) {
    console.log('Try again please, you didn\'t type anything');
} else {
    (enteredValueConverted > 7) ?
        console.log('Hello') :
        console.log(`Entered number (${enteredValue}) isn't more than 7`);
}