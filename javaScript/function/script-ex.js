// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

// Primeira forma.

const paragrafos = Array.from(document.querySelectorAll('p'));

const totalCar = paragrafos.reduce((acc, item) => acc + item.innerText.length, 0);
 
// Segunda usando call.

// const paragrafos = document.querySelectorAll('p');

// const totalCar = Array.prototype.reduce.call(paragrafos, (acc = 0, item) => {
//   return acc + item.innerText.length;
// }, 0);

//console.log(totalCar)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function creatElement(tag, classe, pai, content) {
  const el = document.createElement(tag);
  el.className = classe;
  el.textContent = content;
  document.querySelector(pai).appendChild(el);
}

creatElement('p', 'teste', 'section' ,'Ola, tag');

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const createH1 = creatElement.bind(null, 'h1', 'titulo', 'body');

createH1('Nobru');
createH1('Outro titulo');