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
        this.mensagem('usou magia');
        break;
      case 'guerreiro':
        this.mensagem('usou espada');
        break;
      case 'monge':
        this.mensagem('usou artes marciais');
        break;
      case 'ninja':
        this.mensagem('usou shuriken');
        break;
      default:
        this.mensagem('atacou');
    }  
  }

  mensagem(ataque) {
    var mensagem = `O ${this.tipo} atacou usando ${ataque}`;
    document.getElementById("resultado").innerHTML = mensagem;
  }
}

function criarHeroi() {
  const nome = document.getElementById('heroName').value;
  const idade = document.getElementById('heroAge').value;
  const tipo = document.getElementById('heroType').value;

  try {
    const heroi = new Hero(nome, idade, tipo);
    heroi.atacar();
  } catch (error) {
    console.error(error.message);
  }
}