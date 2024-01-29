// exercicios soma elementos
const SomaElementos = array => {
    let soma = 0
    array.forEach(value => {
        if (typeof value === 'number') soma += value
    })
    return soma 
}
let numeros = [1, 2, 3, 4, 5];
// Seu código aqui
console.log(SomaElementos(numeros));  // Resultado esperado: 15
// exercicios pares 
const filtrarPares = array => {
    let new_array = []
    array.forEach(value  => {
        if (value % 2 === 0) new_array.push(value)
    })
    return new_array
}
let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Seu código aqui
console.log(filtrarPares(Numeros));  // Resultado esperado: [2, 4, 6, 8, 10]
