Array.prototype.reduce2 = function(callback){
    let acumulado = this[0]
    for (let c = 1;c < this.length;c++){
        acumulado = callback(acumulado,this[c],c,this)
    }
    return acumulado
}

const numbers = ['Alvaro','Gabriel','lima','ramos']
const total = numbers.reduce2((acumulado,valorAtual) => {
    return acumulado + ' ' + valorAtual
},0)
console.log(total)