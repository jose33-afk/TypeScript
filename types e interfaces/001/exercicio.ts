interface empresaFabricanteObj {
  nome: string;
  fundacao: number;
  pais: string;
}

interface empresaMontadoraObj {
  nome: string;
  fundacao: number;
  pais: string;
}

interface ApiProduto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: empresaFabricanteObj;
  empresaMontadora: empresaMontadoraObj;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: ApiProduto) {
  document.body.innerHTML = `
    <div class="text-blue-200">
      <h2 class="text-blue-50>${data.nome}</h2>
      <p class="text-blue-200">Preço R$ ${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
      <p>Garantia: ${data.garantia} Anos</p>
      <p>SeguroAcidentes: ${data.seguroAcidentes}</p>
      <h2>EmpresaFabricante: ${data.empresaFabricante.nome}</p>
      <p>Fundacao: ${data.empresaFabricante.fundacao}</p>
      <p>Pais: ${data.empresaFabricante.pais}</p>
      <h2>EmpresaMontadora: ${data.empresaMontadora.nome}</p>
      <p>Fundacao: ${data.empresaMontadora.fundacao}</p>
      <p>Pais: ${data.empresaMontadora.pais}</p>
    </div>
  `;
}