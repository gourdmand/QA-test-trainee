// Составить алгоритм: если введенное имя совпадает с Вячеслав,
// то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"

const prompt = require('prompt-sync')();
const enteredName = prompt('Enter the name: ');
console.log(`You entered '${enteredName}'`);

if (enteredName.toLowerCase() === 'вячеслав') {
    console.log(`Привет, ${enteredName}`);
}   else {
    console.log(`Нет такого имени`);
}