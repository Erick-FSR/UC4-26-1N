const ask = require('readline-sync');

let nota = ask.questionInt('Digite a nota do aluno: ');

const resultado = nota >= 7 ? `Aprovado`: `Reprovado!`;

console.log(`O aluno foi ${resultado}`);