// o sistema de modulos no nodejs server para organiza e reutilizar código na nossa aplicação,cada arquivo no nodejs é modulo e cada modulo é deve ter uma função ou tarefa especifica no nosso projeto

// o Nodejs utiliza o sistema commonjs para importa e exporta modulos 

this.ola = 'Bem vindo'
// podemos exporta propriedades e funções utilizando apenas a palavra exports e o nome que queremos para fica visivel aos outros modulos
exports.string = 'Bem vindo ao node!'

// a forma mais conhecida é utiliza o module.exports,onde podemos passar apenas uma ou varias propriedades 

let Nome = 'Alvaro'
let soma = 15 + 27
module.exports = Nome // podemos passar apenas uma propriedade 

// a forma mas utilizada do module.exports é passa um objeto com uma ou um conjuto de propriedade 
module.exports = {
    Nome,
    soma,
    Imprimir(nome){
        return `Olá,${nome} bem vindo ao nodejs`
    }
}