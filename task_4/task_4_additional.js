// В дополнение к текстовому отвому на задание 4:
// код проверяет вводимые из консоли скобочные последовательности на правильность

const prompt = require('prompt-sync')();
const enteredSequence = prompt('Enter the bracket sequence: ');

function checkIfNotBracketSequence(sequenceForChecking) {
    return /[^()\[\]]/g.test(sequenceForChecking);
}

function checkIfSequenceIsCorrect (sequenceForChecking) {
    let stack = [];
    for (let i = 0; i < sequenceForChecking.length; i++) {
        let item = stack[stack.length - 1];
        if (sequenceForChecking[i] === '(' ||
            sequenceForChecking[i] === '[') {
            stack.push(sequenceForChecking[i]);
        } else if ((item === '(' && sequenceForChecking[i] === ')') ||
            (item === '[' && sequenceForChecking[i] === ']')) {
            stack.pop();
        } else return false
    }
    return !stack.length
}

if (checkIfNotBracketSequence(enteredSequence) === true) {
    console.log('Please, enter only brackets: (, ), [ or ]');
} else if (checkIfSequenceIsCorrect(enteredSequence) === true) {
    console.log(`Bracket sequence "${enteredSequence}" is correct`);
} else {
    console.log(`Bracket sequence "${enteredSequence}" is incorrect`);
}