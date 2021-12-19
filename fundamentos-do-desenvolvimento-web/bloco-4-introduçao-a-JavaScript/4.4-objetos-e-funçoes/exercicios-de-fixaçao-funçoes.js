// Que tal praticar um pouco?
// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

function calculator (a , b, operator) {
    switch(operator){
        case '+' :
            return a + b
        case '-' :
            return a - b
        case '*' :
            return a * b
        case '/' :
            return a / b
        case '%' :
            return a % b
    
    }
}
console.log(calculator(2,3,'*'))


function maiorDeDois (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(maiorDeDois(5, 8))

function maiorDeTres (a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c){
        return b
    } else {
        return c
    }
}
console.log(maiorDeTres(21, 8, 14))

function positiveOrNegative (number) {
    let resultado = '';
    if (number > 0) {
        resultado = 'positive'
    } else if (number < 0) {
        resultado = 'negative'
    } else {
        resultado = 'zero'
    }
    return resultado
}
console.log(positiveOrNegative(-9))

function triangle (a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return (a + b + c === 180)
    }
    return 'Um ou mais angulos inválidos'
}
console.log(triangle(45, 45, 90))