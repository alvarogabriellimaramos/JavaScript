// função factory ou funções de fabricas,são funções que retorna objetos e nos permite criar objetos de uma forma mas dinamica e melhor,aqui está um exemplo 
// factory simples
function Person(nome,idade){
    return {nome,idade}
}
console.log(Person('Alvaro',18))
// as function factory é muito utilizada para encapsulmento de dados e para priva métodos dentro da função 
function CriarPessoa(nome,idade,cidade){
    let NomePrivado = nome 
    let IdadePrivado = idade 
    function ImprimirDetalhes(){
        console.log({NomePrivado,IdadePrivado,cidade})
    }
    ImprimirDetalhes()
}
CriarPessoa('Alvaro',18,'Abreu e Lima')

