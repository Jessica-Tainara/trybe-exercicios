
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Laranja', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Açucar', 'Morango', 'Granola'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  console.log(Object.values(product))
  const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality)

