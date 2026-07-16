/*let produto = 'Livro';
const preco = 234;

const carro = {
  marca: 'Audi',
  portas: 4
}


const barato = preco < 400 ? true : 'Produto caro';

function somar(a: number, b: number) {
  return a + b;
}*/

//somar(3,3);

const nitendo = {
  nome: 'Nintendo',
  preco: '2000',
}

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nitendo);
console.log(produtoNovo)

