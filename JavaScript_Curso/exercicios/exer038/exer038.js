// exercicio 1 

// imperativo 
const numbers = [1,2,3,4,10,14,12]
let FiltraPares = array => {
    const Pares = []
    for (let c of array ){
        if (c % 2 === 0) Pares.push(c)
    }
    return Pares 
}
console.log(FiltraPares(numbers))

// declarativo 

FiltraPares = array => array.filter(num => num % 2 === 0 ? num : '')
console.log(FiltraPares(numbers))


// exercicio 2 
// imperativo 
let SomaAoQuadrado = array => {
    let total = 0
    for (let num of array) total += num * num 
    return total 
}
// declarativo 
console.log(SomaAoQuadrado(numbers))
const ReduceFunction = (contador,valorAtual) => contador += valorAtual * valorAtual
SomaAoQuadrado = array => array.reduce(ReduceFunction)
console.log(SomaAoQuadrado(numbers))