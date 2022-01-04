// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
const createArray = (acc, array) => {
    array.forEach((element)=> acc.push(element))
    return acc
}
function flatten() {
  // escreva seu código aqui
return arrays.reduce(createArray, [])
}
  
// function flatten() {
//     return arrays.reduce((acc, curr) => acc.concat(curr), []);
//   }
console.log(flatten())
// concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array).

// concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados. 
// O código a seguir une dois arrays:

var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);

//O código a seguir une três arrays:

var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged
var nums = num1.concat(num2, num3);

//O código a seguir une três valores ao array

var alpha = ['a', 'b', 'c'];

// creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged
var alphaNumeric = alpha.concat(1, [2, 3]);


