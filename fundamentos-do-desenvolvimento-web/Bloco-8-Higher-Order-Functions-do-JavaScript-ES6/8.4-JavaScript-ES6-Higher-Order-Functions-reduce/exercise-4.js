const books = require('./exercise-2.js')
//Encontre o livro com o maior nome.


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, book)=> book.name.length > acc.name.length ? book : acc)
}
console.log(longestNamedBook())