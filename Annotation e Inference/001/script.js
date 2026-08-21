"use strict";
let produto = 'Livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
const barato = preco < 400 ? true : 'Produto é caro';
function somar(a, b) {
    return a + b;
}
// somar('3', 3)
const nitendo = {
    nome: 'Nitendo',
    preco: '2000',
};
function transformarPreco(produto) {
    return produto.preco = 'R$' + produto.preco;
}
console.log(transformarPreco(nitendo));
// const teste = { nome:'2', preco:'3'}
// console.log(transformarPreco(teste))
/*
  1.0 - Muito interresante... Ele proprio faz as verificações de; tipo, e se um determinado item,
        Tem ou não certa propriedade. Isso vai me poupar bastante tempo.
*/ 
