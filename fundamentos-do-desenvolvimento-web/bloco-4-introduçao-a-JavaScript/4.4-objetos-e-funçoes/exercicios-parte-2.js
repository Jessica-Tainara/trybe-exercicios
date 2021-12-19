// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
function verificaPalindrome(word) {
    let wordReverse = word.split('').reverse().join('')
    return (wordReverse === word) 
}
console.log(verificaPalindrome('arara') );
// Retorno esperado: true
console.log(verificaPalindrome('desenvolvimento')) ;
// Retorno esperado: false
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceDoMaior (array) {
    let maior = array[0];
    let indice = 0;
    for (let index in array) {
        if (array[index] > maior) {
            indice = index
        }
    }
    return indice
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]))
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceDoMenor (array) {
    let menor = array[0];
    indice = 0;
    for (let index in array) {
        if (array[index] < menor) {
            indice = index
        }
    }
    return indice
}
console.log(indiceDoMenor( [2, 4, 6, 7, 10, 0, -3]))
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorPalavra (array) {
    let maior = array[0];
    for (let name of array) {
        if (name.length > maior.length) {
            maior = name
        }
    }
    return maior
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function maisRepetido(array) {
    let repeticoes = 0;
    let maior = 0;
    let Num = array[0]
    for (let number of array) {
        for (let num of array) {
            if(num=== number) {
                repeticoes += 1
            }
        }
        if (repeticoes > maior) {
            maior = repeticoes
            Num = number
        }
        repeticoes = 0
    }
    return Num
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somatorio(number) {
    let soma = 0;
    for (let i = 1; i <= number; i+= 1) {
        soma += i
    }
    return soma
}
console.log(somatorio(5))
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function endingWord (word, ending) {
    let Word = word.split('').reverse()
    let auxiliar = ''
    let Ending = ending.split('').reverse()
    for(let i = 0; i < Ending.length; i += 1) {
        auxiliar += Word[i]
    }
    return (auxiliar === Ending.join(''))
}
console.log(endingWord('trybe', 'be'))

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
console.log(endingWord('joaofernando', 'fernan'))
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
