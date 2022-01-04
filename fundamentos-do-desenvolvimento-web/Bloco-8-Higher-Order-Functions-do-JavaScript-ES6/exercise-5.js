const books = require('./exercise-1.js');
// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((book)=> book.author.birthYear >= 1900 && book.author.birthYear <= 1999 )
}
console.log(everyoneWasBornOnSecXX())
