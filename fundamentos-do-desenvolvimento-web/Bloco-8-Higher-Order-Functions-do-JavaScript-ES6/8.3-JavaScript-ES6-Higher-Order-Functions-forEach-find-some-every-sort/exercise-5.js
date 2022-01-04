const books = require('./exercise-1.js');
// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter((book)=> book.genre === 'Fantasia' || book.genre ==='Ficção Científica' ).map((book)=> book.author.name).sort()
}
console.log(fantasyOrScienceFictionAuthors())