// type NumberOrString = number | string;

// const total: NumberOrString = 34

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML = `
    <div class="text-blue-200">
      <h2>${dados.nome}</h2>
      <p>Preço R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim':'Não'}</p>
    <div>
  `
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: true
})

type Categorias = 'design' | 'codigo' | 'discord';

function pintarCategoria(categoria: Categorias) {
  console.log(categoria)
}

pintarCategoria('codigo')
export {};