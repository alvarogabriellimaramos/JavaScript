// o apply é semelhante ao Call e é utilizado para controla o contexto do this no ambiente de execução
function getPreço(nome){
    this.nome = nome
    return {nome:this.nome,imposto:this.imposto,moeda:this.moeda}
}
const produto = {
    nome:'Notebook',
    imposto: 2,
    moeda: 'usd'
}
console.log(getPreço.apply(produto,['Computador']))
// também passamos argumentos,mas ao invés de serem argumentos individuais,passsamos os argumentos dentro de um array 