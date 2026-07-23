const pessoa = {nome: "Erick", idade: 20}
for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
}