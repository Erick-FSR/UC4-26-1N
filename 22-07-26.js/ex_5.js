const ask = require('readline-sync');

let dia = Number(ask.question(`Digite um dia da semana (1 a 7): `));

switch (dia) {
    case 1:
        console.log(`O dia ${dia} é domingo.`)
        break;
    case 2:
        console.log(`O dia ${dia} é segunda-feira.`)
        break;
    case 3:
        console.log(`O dia ${dia} é terça-feira.`)
        break;
    case 4:
        console.log(`O dia ${dia} é quarta-feira.`)
        break;
    case 5:
        console.log(`O dia ${dia} é quinta-feira.`)
        break;
    case 6:
        console.log(`O dia ${dia} é sexta-feira.`)
        break;
    case 7:
        console.log(`O dia ${dia} é sábado.`)
        break;
    default:
        console.log(`O dia ${dia} não é válido.`)
        break;
}