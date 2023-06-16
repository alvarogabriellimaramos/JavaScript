// a variavel a e a variavel b aponta para a mesma localização na memoria 
const a = {
    nome: 'Alvaro',
    salario: 2500
}
const b = a 
console.log(b.nome)

/* O valor null é usado para dizer que uma variável não possui um valor válido ou dizer que a variavel não tem nenhum endereço de memoria,quando atribuimos um valor null a uma variavel estamos indicando que não há um objeto ou valor válido associado a ela,o null é muito usando para dizer diretamente que uma variavel ou qualquer outro valor está vazio, o valor null é atribuivel ou seja a linguagem de programação não irá atribuir automaticamente ,ou seja para atribuir um valor null a uma variavel terá que ser feito manualmente,em resumo o valor null é a ausencia de valor */
function null_fn(variavel){
    if (variavel == ''){
        return null 
    }
    else{
        return variavel
    }
}
console.log(null_fn(''))
/* 
undefined é um tipo de dado que indica que uma variável foi declarada,mas ainda não foi atribuída,quando uma variável é declarada sem um valor,ela automaticamente irá retorna undefined,alem disso caso acessemos uma propriedade inexistente o valor undefined irá ser retornado, ou quando uma função não retorna nenhum valor , lembrando que o valor undefined é diferente de is not defined(dizendo que a variavel nem sequer foi criada )é recomendado não atribuir o valor undefined a uma variavel e sim deixa a propria linguagem atribuir esse valor,caso queiramos zera o valor da variavel ou dizer que a variavel não tem nenhum valor,usamos o null */
let x
console.log(x)
 
function fn_undefined(){
    return 
}
console.log(fn_undefined()) 
let valor = null
// console.log(valor.toString())  teremos erro já que não podemos acessar uma variavel com o valor null,não podemos acessar nenhum método ou função da variavel  

let valor_2 
const null_undefined = (variavel) => {
    if (variavel == undefined){
        variavel = 'Alvaro'
    }
    return variavel
}
console.log(null_undefined(valor_2))
// lembrando que não podemos usar o valor undefined em uma variavel constante,teremos um erro,mas nas palavras var,let teremos o retorno undefined 

const obj = {
    nome: (n) => {
        return `Olá ${n}`
    }
}
console.log(obj.nome('Alvaro '))
// podemos deletar valores dentro de um objeto usando o delete 
delete obj.nome 
console.log(obj)