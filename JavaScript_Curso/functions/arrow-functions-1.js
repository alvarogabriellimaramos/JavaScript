function FN(){
    return this // (window/global)
}
console.log(FN())
function FN2(nome,idade){
    return `Olá ${this.nome},sua idade é de ${this.idade}`
}
const Pessoa = {
    nome: 'Alvaro',
    idade: 18,
    THIS: FN2
}
console.log(Pessoa.THIS())
const TESTE = () => {
    const pessoa = {
        nome: 'Alvaro'
    }
    return this
}
console.log(TESTE())
// Em funções arrow, o valor do this sempre irá aponta ao contexto em que a função foi definida,não irá varia igual as funções regulares fazem 
const ARROW_FUNCTION = (nome,idade) => { 
    // função arrow irá aponta para o objetos globais,já que ela está sendo definida no escopo global
    return `Olá ${this.nome},sua idade é de ${this.idade} anos`
}
function FunçãoRegular(){
    const ArrowFunction = () => {
        // Aqui o this da função arrow irá aponta para o escopo da FunçãoRegular
        return this
    }
    ArrowFunction()
}
const People = {
    nome: 'Alvaro',
    idade: 18,
    Imprimir: ARROW_FUNCTION
}
console.log(People.Imprimir())