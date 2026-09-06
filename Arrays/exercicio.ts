// Defina a interface da API: https://api.origamid.dev/json/cursos.json e 
// mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). 
// Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface TypeApi {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number> ;
  nivel: string;
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: TypeApi[]) {
  cursos.forEach(item => {
    console.log(item.tags)
    document.body.innerHTML += `
      <div class="text-blue-50">
        <h2>Cursos: ${item.nome}</h2>
        <p>Horas: ${item.horas}</p>
        <p>Aulas: ${item.aulas}</p>
        <p>Gratuito: ${item.gratuito}</p>
        <p>tags: ${item.tags.join(', ')}</p>
        <p>IdAulas: ${item.idAulas.join(', ')}</p>
        <p >Nivel: <span class="${item.nivel === 'iniciante' ? 'text-blue-500' : 'text-red-500'}">${item.nivel}<span></p>
      </div>
    `;
  });
}