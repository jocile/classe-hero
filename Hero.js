class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tiposPossiveis = ['mago', 'guerreiro', 'monge', 'ninja'];

    if (this.tiposPossiveis.includes(tipo)) {
      this.tipo = tipo;
    } else {
      throw new Error('Tipo de herói inválido');
    }
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'atacou';
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
try {
  let mago = new Hero('Merlin', 100, 'mago');
  let guerreiro = new Hero('Aragorn', 35, 'guerreiro');

  mago.atacar(); // Saída: o mago atacou usando magia
  guerreiro.atacar(); // Saída: o guerreiro atacou usando espada
} catch (error) {
  console.error(error.message);
}
