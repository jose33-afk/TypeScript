const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

// console.log(somar)

function descricaoCarro(carro) {
  console.log(this)
  console.log(this.marca + ' ' + carro);
}

// descricaoCarro.call({marca: 'Honda', ano: 2010}, 'Civi') // 1.0

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
}

// const li = {
//   element: document.querySelector('li'),
// }

// const ul = new Dom('ul');

// Dom.prototype.ativo.call(li, 'Ativo')
// console.log(ul)

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
// console.log(frutas)

const li = document.querySelectorAll('li');


const filtro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
});

const numeros = [2, 45, 3, 4, 5, 67];

// console.log(Math.max.apply(null, numeros))

// console.log(filtro())

// const obj = {
//   nome: 'Ana',
//   falar() {
//     console.log(`Ola, sou ${this.nome}`);
//   }
// }

// function teste() {
//   return obj.falar.bind(obj);
// }

// setTimeout(teste(), 3000);

// function meuMap(callback) {
//   const novoArray = [];
//   for (let i = 0; i < this.length; i++) {
//     novoArray.push(callback(this[i]))
//   }
//   return novoArray
// }

// const arrytest = ['Abacaxi', 'mamao', 'Abobora']

// const novoArray = meuMap.call(arrytest, item => item + ' vendido');

// console.log(novoArray)


/*
  1 - o call: muda o this, originalmente as funcoes tem como this o windown,
      o primeiro argumento é o this, os seguintes sao os argumentos normais.
*/
