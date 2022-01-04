// Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce
let numbers = [50, 85, -30, 3, 15];
let maior = numbers [0]
for (let i =0 ; i< numbers.length; i +=1){
    if (numbers[i]> maior){
        maior = numbers[i]
    }
}
console.log(maior)

const Maior = (result, number)=> {
    if (number > result){
        result = number
    }
    return result
    
} 
console.log(numbers.reduce(Maior))

//Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const somaPares = (result, number)=> {
    if(number % 2 === 0){
        result += number
    }
    return result
}
console.log(numbers.reduce(somaPares))
//Solução usando filter e reduce :
const pares = numbers.filter((number)=> number % 2 === 0)
console.log(pares.reduce((result , number)=> result + number))

//Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
const melhorNota = (maior , materia)=> {
    if (materia.nota >= maior.nota){
        maior = materia     
    }
    return maior
}
const melhorDesempenho = estudantes.map((estudante)=> {
    return {
        name : estudante.nome,
        matéria : estudante.materias.reduce(melhorNota).name
        }
    
    
})
console.log(melhorDesempenho)