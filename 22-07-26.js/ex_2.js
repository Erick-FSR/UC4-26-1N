const ask = require('readline-sync');

let n1 = ask.questionInt('Digite o primeiro numero: ');
let n2 = ask.questionInt('Digite o segundo numero: ');

let soma = n1 + n2;

console.log(`A soma de ${n1} e ${n2} é ${soma}.`);

let subtracao = n1 - n2;

console.log(`A subtração de ${n1} e ${n2} é ${subtracao}.`);

let multiplicacao = n1 * n2;

console.log(`A multiplicação de ${n1} e ${n2} é ${multiplicacao}.`);

let divisao = n1 / n2;

console.log(`A divisão de ${n1} e ${n2} é ${divisao}.`);