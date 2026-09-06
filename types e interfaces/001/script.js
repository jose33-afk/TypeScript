// type NumberOrString = number | string;
function preencherDados(dados) {
    document.body.innerHTML = `
    <div class="text-blue-200">
      <h2>${dados.nome}</h2>
      <p>Preço R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
    <div>
  `;
}
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: true
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria('codigo');
export {};
