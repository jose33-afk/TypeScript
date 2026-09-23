const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return console.log(this.marca + ' acelerou');
  },
  buzinar() {
    return this.marca + ' buzinou!';
  }
}

const honda = Object.create(carro);
honda.marca = 'Honda'
honda.acelerar()