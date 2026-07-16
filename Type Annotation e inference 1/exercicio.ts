// Exercicio 1.
/*
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

let nome = 'LeanDRO ';
console.log(normalizarTexto(nome));
*/

// Exercicio 2.

const input = document.querySelector('input') as HTMLInputElement; // 2.0

const total = localStorage.getItem('Total') ?? ''; // 1.0 
input.value = total;

calcularGanho(+input.value);

function calcularGanho(value: number) {
  value = +value;
  const p = document.querySelector('p');
  if(p) p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('Total', String(value));
  calcularGanho(value)
}

input?.addEventListener('keyup', totalMudou);

/*
  1.0 - ??: Se o lado esquerdo for null ou undefined use o lado direito.
  2.0 - as: O typeScript não consegue ler o DOM. então ele assume que vc buscou um elmento generioc
        e como neste caso é um input ele contém .value, mas um elemento generico não possui, dessa forma ele reclama.
*/