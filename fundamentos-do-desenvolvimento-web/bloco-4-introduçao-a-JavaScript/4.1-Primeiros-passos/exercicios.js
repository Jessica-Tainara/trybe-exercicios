// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
const a = 5;
const b = 8;
const c = 6
// Adição (a + b)
console.log(a+b)
// Subtração (a - b)
console.log(a-b)
// Multiplicação (a * b)
console.log (a*b)
// Divisão (a / b)
console.log(a/b)
// Módulo (a % b)
console.log(a%b)

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
if (a > b && a > c) {
    console.log (c)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const number = -9;
if ( number > 0){
    console.log('positive')
} else if (number< 0) {
    console.log('negative')
}else {
    console.log('zero')
}
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const d = 90;
const e = 5;
const f =45;
 if ( d>0 || e> 0 || f > 0 ) {
     console.log(d + e + f === 180)
 } 


// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
let peça = 'Rei'
switch(peça.toLowerCase()) {
    case 'rei' :
        console.log('move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance')
        break;
    case 'rainha' :
        console.log('é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor')
        break;
    case 'cavalo' :
        console.log('movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.')
        break;
    case 'torre' :
        console.log('movimenta-se em direção reta pelas colunas ou fileiras.')
        break;
    case 'peão' :
        console.log('movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.')
        break;
    case 'bispo' :
        console.log('move-se a qualquer casa ao longo de uma diagonal que ocupa. Ao executar seus lances, a dama, a torre ou o bispo não podem pular sobre nenhuma peça em seu caminho.')
        break;
    default :
        console.log('Peça inválida')
}
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
const porcentagem  = 92
if (porcentagem < 0 || porcentagem >100) {
    console.log('Erro')
} else if (porcentagem >= 90 ){
    console.log('A')
} else if (porcentagem >= 80) {
    console.log('B')
} else if (porcentagem >= 70) {
    console.log('C')
} else if (porcentagem >= 60) {
    console.log('D')
} else if (porcentagem >= 50) {
    console.log('E')
} else if (porcentagem < 50) {
    console.log('F')
} 

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
const j = 9
const k = 2
const l = 3

console.log(j%2=== 0 || k%2=== 0 || l%2=== 0 )
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
console.log(j%2=== 1|| k%2=== 1 || l%2=== 1 )

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custo = 10
const venda = 150

if (custo > 0 && venda >0) {
    console.log((venda - custo - 20/100 * custo) * 1000)
} else {
    console.log('Valores inválidos')
}
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salario = 3000
let inss = 0;
let ir = 0;
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
if (salario <= 1556.94) {
    inss = 8/100 * salario
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = 9/100 * salario
} else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = 11/100 * salario
} else {
    inss = 570.88
}
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
const base = salario - inss
// IR (Imposto de Renda)
if (base >= 1903.99 && base <= 2826.65) {
    ir = 7.5/100 * base - 142.80
} else if (base >= 2826.66 && base <= 3751.05) {
    ir = 15/100 * base - 354.80
} else if (base >= 3751.06 && base <= 4664.68) {
    ir = 22.5/100 * base - 636.13
} else {
    ir = 27.5/100 * base - 89.36
}
console.log(salario - inss - ir)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
