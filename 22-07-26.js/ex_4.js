const ask = require('readline-sync');

let n1 = ask.questionInt('Digite o primeiro numero: ');

if (n1 % 2 === 0) {
    console.log(`O numero ${n1} é par!`);

} else {
    console.log(`O numero ${n1} é impar!`)
}