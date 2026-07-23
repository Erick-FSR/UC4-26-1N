const ask = require('readline-sync');

const produtos = [
    { nome: 'Arroz', preco: 5.99 },
    { nome: 'Feijão', preco: 7.49 },
    { nome: `Salsicha`, preco: 5.90}
];

console.log(`Produtos disponiveis:\n 1- Arroz\n2- Feijao\n3- Salsicha`);

let escolha = Number(ask.question(`Opcao: `));

switch (escolha) {
    case 1:
        console.log(`O produto escolhido foi ${produtos[0].nome} e o preço é R$${produtos[0].preco.toFixed(2)}`);
        break;

    case 2:
        console.log(`O produto escolhido foi ${produtos[1].nome} e o preço é R$${produtos[1].preco.toFixed(2)}`);
        break;
    case 3:
        console.log(`O produto escolhido foi ${produtos[2].nome} e o preço é R$${produtos[2].preco.toFixed(2)}`);
        break;
}