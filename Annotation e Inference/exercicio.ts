import { iconSpinner, iconCheck, iconX} from './icons.js';

class isAWord {
  input: HTMLInputElement | null;
  status: HTMLElement | null;
  classeBase: string;
  classeProcessando: string;
  classeValida: string;
  classeInvalida: string;
  timerLimpeza: number | null;

  constructor() {
    this.input = document.querySelector('#inputTxt');
    this.status = document.querySelector('.status');
    this.timerLimpeza = null;

    this.classeBase = 'status mt-4 text-center font-semibold bg-white p-2 rounded border min-h-[2.5rem]';
    this.classeProcessando = 'border-blue-600 text-blue-600';
    this.classeValida = 'border-green-600 text-green-600';
    this.classeInvalida = 'border-red-600 text-red-600';

    if (this.status) {
      this.status.className = this.classeBase + ' text-gray-400';
      this.status.textContent = 'Digite uma palavra';
    }
  }

  normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
  }

  async isWordBr(palavra: string) {
    interface ApiResponse { // 1.1
      query: {
        pages: Record<string, { title: string; missing?: string; pageid?: number }>;
      };
    }

    const url = `https://pt.wiktionary.org/w/api.php?action=query&titles=${encodeURIComponent(palavra)}&format=json&origin=*`; // 1.0

    try {
      const response = await fetch(url);
      const data = await response.json() as ApiResponse;
      const pagDicionario = Object.values(data.query.pages)[0];

      return pagDicionario ? !('missing' in pagDicionario) : false;
    } catch(e) {
      return false
    }
  }

  #resetarStatus() {
    if (this.timerLimpeza) clearTimeout(this.timerLimpeza);

    this.timerLimpeza = setTimeout(() => {
      if (this.input) this.input.value = '';
       if (this.status) {
        this.status.className = this.classeBase + ' text-gray-400';
        this.status.textContent = 'Digite uma palavra';
      }

      this.timerLimpeza = null;
    }, 2000);
  }

  init () {
    const input = this.input;
    const status = this.status;
    let timerDelay: number | null = null;

    if (!input || !status) return;

    input.addEventListener('change', () => {
      if (timerDelay) { clearTimeout(timerDelay); timerDelay = null; };
      if (this.timerLimpeza) { clearTimeout(this.timerLimpeza); this.timerLimpeza = null; };
  
      status.className = this.classeBase + ' ' + this.classeProcessando;
      status.innerHTML = `${iconSpinner} Processando...`;

      let txtLimpo = this.normalizarTexto(input.value);

      if(!/^\p{L}+$/u.test(txtLimpo)) {
        input.value = '';
        status.className = this.classeBase + ' ' + this.classeInvalida;
        status.innerHTML = `${iconX} Apenas letras (sem números ou especiais)`;

        this.#resetarStatus();
        
        return;
      };

      timerDelay = setTimeout(async () => {
        const palavraAtual = this.normalizarTexto(input.value);

        if (palavraAtual !== txtLimpo) return;

        const valido = await this.isWordBr(txtLimpo);

        const palavraDepois = input.value.trim().toLowerCase();
        if (palavraDepois !== txtLimpo) return;

        status.className = this.classeBase + ' ' + (valido ? this.classeValida : this.classeInvalida);
        status.innerHTML = valido ? `${iconCheck} Válida` : `${iconX} Inválida`;

        this.#resetarStatus();
      }, 3000);
    })
  }
}   

const validador = new isAWord();
validador.init();

/*
  1 - Serve para: Decodificar caracteres especiais na URL, como acentos, espaços,
      ç, etc...
  1.1 - isso fugiu do nivel do exercicio, mas está aqui para fins de organização.
*/