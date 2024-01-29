// JSON (javascript object notation) é um formato textual talvez o mais utilizando hoje no mercado para fazer conexões entre sistema,requisições http e etc...O formato ele é muito utilizando pela sua facilidade de aprende-lo e utilizado no dia a dia

// exemplo 

const obj = {
    nome: 'Alvaro',
    idade:18,
    profissão: 'Desenvolvedor',
    metodo: (a,b) => console.log(a + b) 
}
// o método (a função) será excluída isso por que o json é um formato de dados,para repassar ou passar dados para outras aplicações ou linguagem de programação,o json não é algo que pode ser executado 
const Json = JSON.stringify(obj)
// como agora o objeto passou a ser uma string,podemos utilizar todos os métodos de string javascript 
console.log(Json.toUpperCase())
// inverso transformando uma string json em um objeto
console.log(JSON.parse(Json))
// maneira correta de escreve um arquivo json,os arquivos json devem ser escritos,suas propriedades devem ser escritas com aspas duplas,caso contrario teremos um arquivo invalido 
const JsonObject = '{"nome":"Alvaro","idade":18}' // numeros e valores booleanos não precisam de aspas,mas string precisam de aspas duplas  

console.log(JSON.parse(JsonObject))