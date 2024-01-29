class Avo{
    constructor(nome){
        this.nome = nome 
        this.sobrenome = 'ramos '
        this.nomeCompleto = `${nome} ${this.sobrenome} `
    }
}
// para criamos uma herança no javascript utilizando a palavra chave extends e dentro do constructor utilizamos o super para conseguimos acessar todas as propriedades da classe pai,lembrando que o super tem que ser declarado antes de qualquer palavra this
class Pai extends Avo {
    constructor(nome){
        super(nome)
    }
}

const avo = new Avo('Zé')
console.log(avo)
const pai = new Pai('Alvaro')
console.log(pai.nomeCompleto)