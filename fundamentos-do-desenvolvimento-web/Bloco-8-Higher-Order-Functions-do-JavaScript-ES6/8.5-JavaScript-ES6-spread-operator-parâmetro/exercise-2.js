// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
// Copiar
// // escreva sum abaixo
const sumAll = (...values) => {
       return values.reduce((acc, value) => acc + value)
}
console.log(sumAll(1,2,3,4,5))