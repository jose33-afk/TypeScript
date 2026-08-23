class isAWord {
  input: HTMLInputElement | null;
  status: HTMLElement | null;
  classeBase: string;
  classeProcessando: string;
  classeValida: string;
  classeInvalida: string;

  constructor() {
    this.input = document.querySelector('#inputTxt');
    this.status = document.querySelector('.status');

    this.classeBase = 'status mt-4 text-center font-semibold bg-white p-2 rounded border min-h-[2.5rem]';
    this.classeProcessando = 'border-blue-600 text-blue-600';
    this.classeValida = 'border-green-600 text-green-600';
    this.classeInvalida = 'border-red-600 text-red-600';
  }

  normalizarTexto(texto: string) {
    return texto.trim().toLocaleLowerCase();
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

       return !('missing' in pagDicionario);
    } catch(e) {
      return false
    }
  }

  init () {
    const input = this.input;
    const status = this.status;
    let timer: number;

    if (!input || !status) return;

    input.addEventListener('change', () => {
      clearTimeout(timer)

      status.className = this.classeBase + ' ' + this.classeProcessando;
      status.textContent = '⏳ Processando...';

      let txtLimpo = this.normalizarTexto(input.value);

      if(!/^[a-zA-ZÀ-ÿ]+$/.test(txtLimpo)) {
        input.value = '';
        status.className = this.classeBase + ' ' + this.classeInvalida;
        status.textContent = 'Digite somente letras';

        return;
      };

      timer = setTimeout(async () => {
        const valido = await this.isWordBr(txtLimpo);
        
        status.className = this.classeBase + ' ' + (valido ? this.classeValida : this.classeInvalida);
        status.textContent = valido ? '✅ Válida' : '❌ Inválida';

        setTimeout(() => {
          input.value = '';
          status.className = this.classeBase;
          status.textContent = '';
        }, 2000);
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