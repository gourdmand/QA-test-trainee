// Составить алгоритм: на входе есть числовой массив,
// необходимо вывести элементы массива кратные 3

const prompt = require('prompt-sync')();

const promptData = prompt('Enter the array items separated by a space: ');
const arrayFromPrompt = promptData
    .trim()
    .split(` `);
const arrayFromPromptFiltered = arrayFromPrompt
    .filter(item => (item % 3 === 0));

if (!promptData) {
    console.log('There are no elements for filtering, you didn\'t type anything');
} else if (arrayFromPromptFiltered.length === 0)   {
    console.log(`There are no elements multiples 3 in your array [${arrayFromPrompt}]`)
}   else {
    console.log(`Your array [${arrayFromPrompt}] after being filtered is: [${arrayFromPromptFiltered}]`)
}
