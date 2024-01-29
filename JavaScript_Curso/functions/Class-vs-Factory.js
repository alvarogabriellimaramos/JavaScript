class pessoa{
    constructor(nome){
        this.nome = nome
    }
    Falar(){
        console.log('Ola meu nome é  ',this.nome)
    }
}
const alvaro = new pessoa('alvaro')
alvaro.Falar()
function Pessoa(nome) {
    return {
        falar: () => console.log('Ola meu nome é ',nome) // exemplo léxico
    }
}
const Alvaro = Pessoa('Alvaro')
Alvaro.falar()