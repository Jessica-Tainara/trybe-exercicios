const books = require('./exercise-1.js');

// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    nameBook = books[0].name
    books.forEach((book)=> {
        if(book.name.length < nameBook.length){
            nameBook = book.name
        } 
    })
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
  console.log(smallerName())

// Quando uma variavel é apenas declarada, mas não recebe nenhum valor , como a variavel 'nameBook', o valor boleano padrao dela é undefined , usando o ! na frente dela o valor muda para true. Quando tem um valor atribuido a ela e colocamos o ! na frente é retornado false. Entao uma outra maneira de fazer a função smallerName é :
 /*function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.forEach((book)=> {
        if(!nameBook || book.name.length < nameBook.length){
            nameBook = book.name
        } 
    })
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }*/
