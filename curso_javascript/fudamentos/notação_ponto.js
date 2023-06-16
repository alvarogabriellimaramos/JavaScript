// Notação ponto em javascript é uma forma de acessar propriedades e métodos(geralmente funções) de um objeto
// a notação de ponto segue o seguinte formato 
const obj = {
    nome:'Alvaro',
    idade: 17,
    saudação: function(){
        return 'Olá ' + this.nome
    }
}
console.log(obj.saudação())
console.log(typeof console.log)
function Pessoa(nome,idade){
    this.nome = nome,
    this.idade = idade 
}
const instancia = new Pessoa('alvaro',18)
console.log(instancia.nome)