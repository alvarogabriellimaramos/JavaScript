// This é uma palavra chave com a mesma função do self do python,referencia objetos e instancia dando acesso global a esses objetos declarados com o this 
function fn(nome,idade){
    this.nome = nome,
    this.idade = idade 
}
// a palavra this permiter a acesso a propriedades e métodos dentro de classes ou funções 
// e para criar uma instancia no javascript usamos a palavra reservada new o nome da nossa função e colocamos os parametros que a nossa função construtora recebe 
const fnc = new fn('alvaro',18)
console.log(fnc.nome)
// podemos usar a palavra reservada this em objetos também para termos acesso ao seu conteudo 
//lembrando que a palvra this está conectada ao método window que é um método global do javascript e permitir se acessando de qualquer lado do codigo 
const obj = {
    nome:'Alvaro',
    idade: 18,
    imprimir: function(profissão){
        return `seu nome é ${this.nome} e sua profissão é ${this.profissão = profissão}`
    }
}
console.log(obj.imprimir('programador'))
function objs(p){
    const obj = {
        nome:'Alvaro',
        salario: 3500,
        profissão:function(profissão
        ){
            return `${this.nome} trabalha como ${profissão}`
        }
    }
    return obj.profissão(p)
}
console.log(objs('programador'))

