const ComparComThis = function(param){
    console.log(this === param)
}
ComparComThis(global) // o this dentro da função regula fora de qualquer escopo irá aponta para objeto global
const obj = {}
const NEW_FUNCTION = ComparComThis.bind(obj)
NEW_FUNCTION(obj)

let ArrowFunction = param =>  console.log(this === param)

ArrowFunction = ArrowFunction.bind(obj) // mesmo com método explicitos o this dentro de uma função arrow não irá mudar de jeito nenhum 
ArrowFunction(module.exports) // o this dentro de uma função arrow é o proprio modulo(arquivo javascript)