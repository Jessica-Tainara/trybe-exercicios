// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5
let n = 5
let line = ''
for (let index = 1; index <= n; index += 1) {
    line += '*'
}
for (let i = 1; i <= n; i += 1) {
    console.log (line)
}
line = ''
// *****
// *****
// *****
// *****
// *****
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5
for (let i = 1; i <= n; i += 1) {
    line += '*'
    console.log (line)
}
line = ''
// *
// **
// ***
// ****
// *****
// 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5
for (let i = n; i >= 1; i -= 1) {
    for (let index = 1; index <= n; index += 1) {
        if (index < i){
            line += ' '
        } else {
            line += '*'
        }
    }
    
    console.log (line)
    line = ''
}

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
// 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5
let control = 0
let meio = (n + 1) / 2
for (let i = 1; i <= meio; i += 1) {
    for (let index = 1; index <= n; index += 1) {
        if (index < meio-control || index > meio+control){
            line += ' '
        } else {
            line += '*'
        }
    }
    
    console.log (line)
    line = ''
    control+= 1
}

//   *
//  ***
// *****
// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
 n = 7
 meio = (n + 1) / 2
 control = 0
for (let i = 1; i <= meio; i += 1) {
    for (let index = 1; index <= n; index += 1) {
        if (i === meio) {
            line += '*'
        }
        else if (index === meio-control || index === meio+control){
            line += '*'
        } else {
            line += ' '
        }
    }
    
    console.log (line)
    line = ''
    control+= 1
}


//    *
//   * *
//  *   *
// *******
// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
let number = 18
let qtdDivisores = 0
for (let i =0; i <= 19; i += 1) {
    if (number % i === 0){
        qtdDivisores += 1
    }
}
if (qtdDivisores === 2) {
    console.log(`${number} é um número primo`)
} else {
    console.log(`${number} não é um número primo`)
}
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
