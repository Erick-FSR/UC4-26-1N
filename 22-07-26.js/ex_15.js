const ask = require('readline-sync');

function saudacao(){
     
    console.log(`Saudações ${nome}, você tem ${idade} anos de idade.`)
}


let nome = ask.question(`Digite o seu nome: `);

let idade = Number(ask.question(`Digite a sua idade: `));
saudacao(nome, idade);