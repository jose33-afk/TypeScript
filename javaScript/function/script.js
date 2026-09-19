// Conhecendo mais new.

/*
const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar)
*/


// Entendendo call.

/*
function descricaoCarro(carro) {
  console.log(this)
  console.log(this.marca + ' ' + carro);
}

descricaoCarro.call({marca: 'Honda', ano: 2010}, 'Civi') // 1.0

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
}

const li = {
  element: document.querySelector('li'),
}

const ul = new Dom('ul');

Dom.prototype.ativo.call(li, 'Ativo')
console.log(ul)

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
console.log(frutas)
*/


// Analizando bind.

/*
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
});

const numeros = [2, 45, 3, 4, 5, 67];

console.log(Math.max.apply(null, numeros))

*/

/*
const obj = {
  nome: 'Ana',
  falar() {
    console.log(`Ola, sou ${this.nome}`);
  }
}

function teste() {
  return obj.falar.bind(obj);
}

setTimeout(teste(), 3000);
*/


// Entendendo o funcinamento do map, callback, call e apply.

/*
function meuMap(callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i]))
  }
  return novoArray
}

const arrytest = ['Abacaxi', 'mamao', 'Abobora']

const novoArray = meuMap.call(arrytest, item => item + ' vendido');

console.log(novoArray)
*/


// --- Duas arrays: 1 - array com funcões em ordem de execução.
//     2 - funcoes com os argumentos que eu quero na mesma ordem da array de- 
//     funções. 
//     
//     Retorno: - uma array com os argumentos e função já passados, faltando somente
//     ativar. usando resultados[0]() ---

/*
const arrayfunction = [
  function(fruta){ console.log(`1 ${fruta}`)},
  function(fruta){ console.log(`2 ${fruta}`)},
  function(fruta){ console.log(`3 ${fruta}`)}
]

const frutas = ['mamao', 'maca', 'Abobora']

function processar(fn1, fn2, fn3) {
  return [fn1, fn2, fn3].map((funcao, index) => funcao.bind(null, this[index]));
}

const resultados = processar.apply(frutas, arrayfunction);
resultados[0]()
*/

/*
  1 - o call: muda o this, originalmente as funcoes tem como this o windown,
      o primeiro argumento é o this, os seguintes sao os argumentos normais.
*/
