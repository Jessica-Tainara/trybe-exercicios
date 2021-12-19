let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof(patientId)) // number
console.log(typeof(isEnrolled)) // boolean
console.log(typeof(patientInfo)) // object
console.log(typeof(patientEmail))// string

//  Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined
console.log(typeof patientAge)



// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
const base = 5
let heigth = 8
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
const area = base * heigth
console.log (area)
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = base * 2 + heigth * 2
console.log(perimeter)
