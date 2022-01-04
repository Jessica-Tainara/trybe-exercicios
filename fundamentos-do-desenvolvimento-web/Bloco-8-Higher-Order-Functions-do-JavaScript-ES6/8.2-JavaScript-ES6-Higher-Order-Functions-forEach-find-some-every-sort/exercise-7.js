const books = require('./exercise-1.js');
// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;
for (let key in books) {
    console.log(books[key].author.birthYear) 
}


function authorUnique() {
  
  }
console.log(authorUnique())