// Составить алгоритм: на входе есть числовой массив,
// необходимо вывести элементы массива кратные 3

function numericFilter (arrayBefore) {
    return arrayBefore.filter(item => (item % 3 === 0))
}

const prompt = require('prompt-sync')();
let numericArray = prompt('Enter the array items separated by a space: ');
numericArray = numericArray.trim().split(` `);

const numericArrayAfterFilter = numericFilter(numericArray);

console.log(`Your array: [${numericArray}]`);

if (numericArrayAfterFilter.length === 0)   {
    console.log(`There are no elements multiples 3 in your array`)
}   else {
    console.log(`Array after being filtered is: [${numericArrayAfterFilter}]`)
}
