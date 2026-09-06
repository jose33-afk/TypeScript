"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e 
// mostre os dados na tela.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(item => {
        console.log(item.tags);
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
