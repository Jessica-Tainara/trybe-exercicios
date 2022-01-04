const books = require('./exercise-2.js')
//Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  return books.reduce((acc,book)=> acc + (book.releaseYear -book.author.birthYear),0)/books.length
}
console.log(averageAge()=== expectedResult)