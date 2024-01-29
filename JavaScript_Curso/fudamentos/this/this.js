/*No javascript o this se refer ao contexto de execução atual em que uma função está sendo chamada,por exemplo */

function THIS(){
    console.log(this)
} // podemos criar funções fora de um objeto e coloca essa função dentro de uma chave do objeto especificado,o valor this irá se referi ao objeto em que a função está sendo executada,mesmo sendo criada fora do objeto
const object = {
    nome:'Alvaro',
    idade:18,
    fn: function(){
        console.log(this) // aqui o this se refere ao objeto (object),o que significa que podemos acessa todas as propriedade desse objeto utilizando a palavra this,quando pritamos na tela,ele irá mostra todo o objeto
        console.log(this === object) // output true
    },
    fn_2: THIS
}
object.fn()
console.log(object.fn_2())
// Contexto global: o this se refere ao contexto de execução atual do código(ambiente de execução),no lado do servidor o this se referer ao window,já no lado do node o this se refere ao 'global'

// utilizando o this em classes 
class Teste{
    constructor(nome){
        this.nome = nome
    }
} // o this em classes é utilizando para referencia o parametro dentro do método constructor
