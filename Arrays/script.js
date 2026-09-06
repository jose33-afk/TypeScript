"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQueDez(data) {
    return data.filter(n => n > 10);
}
// console.log(maiorQueDez(numeros));
function filtrarItens(data) {
    return data.filter(item => typeof item === 'number');
}
// console.log(filtrarItens(valores));
const dados = [
    ['Senhor dos aneis', 80],
    ['A guerra dos tronos', 120],
];
