// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
let candidato = 'reprovado'
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
switch (candidato){
    case 'aprovado' :
        console.log('Parabéns, você foi aprovado(a)')
        break;
    case 'reprovado' :
        console.log('Você foi reprovada(o)')
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;
}
