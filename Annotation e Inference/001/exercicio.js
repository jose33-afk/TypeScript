"use strict";
class isAWord {
    input;
    constructor() {
        this.input = document.querySelector('#inputTxt');
    }
    normalizarTexto(texto) {
        return texto.trim().toLocaleLowerCase();
    }
    async isWordBr(palavra) {
        const url = `https://pt.wiktionary.org/w/api.php?action=query&titles=${encodeURIComponent(palavra)}&format=json&origin=*`; // 1.0
        const response = await fetch(url);
        const data = await response.json();
        const pagDicionario = Object.values(data.query.pages)[0];
        return !('missing' in pagDicionario);
        // Estava aqui o ts estava reclamando pq n especifiquei o oq, a api retorna
    }
    async init() {
        const input = this.input;
        let timer;
        if (!input)
            return;
        input.addEventListener('change', () => {
            clearInterval(timer);
            let txtLimpo = this.normalizarTexto(input.value);
            if (!/^[a-zA-ZÀ-ÿ]+$/.test(txtLimpo))
                return;
            timer = setTimeout(async () => {
                console.log(await this.isWordBr(txtLimpo));
            }, 3000);
        });
    }
}
const validador = new isAWord();
validador.init();
/*
  1 - Serve para: Decodificar caracteres especiais na URL, como acentos, espaços,
      ç, etc...
*/ 
