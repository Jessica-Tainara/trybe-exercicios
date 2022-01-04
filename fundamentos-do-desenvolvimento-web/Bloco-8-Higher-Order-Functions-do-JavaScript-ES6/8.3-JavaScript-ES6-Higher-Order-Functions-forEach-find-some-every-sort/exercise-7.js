const books = require('./exercise-1.js');
// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  let result =0
   books.map((book)=> book['author']['name'].split(' ').join('').split('')).filter((book, index)=> {
     if(book[1]==='.' && book[3]==='.' && book[5]==='.'){
    result = index
     }
    })
    return books[result].name
}
console.log(authorWith3DotsOnName())
