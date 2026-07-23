const ask = require('readline-sync');

const numeros = [10, 10, 10, 10, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`A soma dos números é: ${soma}`);