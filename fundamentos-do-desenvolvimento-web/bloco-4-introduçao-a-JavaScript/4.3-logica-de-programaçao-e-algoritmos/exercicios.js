// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 1
for (let i = 10; i>0; i-=1){
    fatorial *= i
}
console.log(fatorial)
// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let word2 = ''
for (let i = word.length-1; i >=0; i -= 1){
  word2 += word[i]
}
console.log(word2)
// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maior ;
let menor ;
let maiorLength = 0
let menorLength = array[0].length
for (let i = 0; i < array.length; i += 1){
    if (array[i].length > maiorLength){
        maiorLength = array[i].length
        maior = array[i]
    }
}
for (let i = 0; i < array.length; i += 1){
    if (array[i].length < menorLength){
        menorLength = array[i].length
        menor = array[i]
    }
}
  console.log(maior)
  console.log(menor)
// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let auxiliar = 0
let primos = [];
for (let i = 0; i <= 50; i += 1){
    for (let index = 0; index <= i; index += 1){
        if (i%index === 0){
            auxiliar += 1
        }
    }
    if(auxiliar === 2){
        primos.push(i)
    }
    auxiliar = 0
}

let maiorPrimo = primos[0]

for (let i = 0; i < primos.length; i += 1){
    if (primos[i] > maiorPrimo){
        maiorPrimo = primos[i]
    }
}
console.log(maiorPrimo)
