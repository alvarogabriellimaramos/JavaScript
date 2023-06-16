const obj = {
    nome: 'Alvaro',
    profissão: 'Programador',
    salario: 3500,
    imprimir: function(){
        return `Nome dessa pessoa é ${this.nome}, sua profissão é ${this.profissão} seu salario é de ${this.salario}`
    }
}
const fn = () => {
    return obj.imprimir()
}
console.log(fn())
