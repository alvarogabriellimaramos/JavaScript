// Função call,essa função é utilizada em objetos do tipo function,a função call é utilizada para controla o valor do this assim como o bind,especificando o contexto de execução da função.
function getPreço(imposto,moeda){
    this.imposto = imposto
    this.moeda = moeda
    return {imposto:this.imposto,moeda:this.moeda}
}
const produto = {
    nome:'Notebook',
    getPreço
}
console.log(getPreço.call(produto,25,'USD'))
// na função call passamos argumentos individuais para função,mas isso é opcional 
