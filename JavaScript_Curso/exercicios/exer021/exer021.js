
function encontrarMaiorNumero(array){
    let Maior = array[0]
    array.forEach(value => {
        if (value > Maior) Maior = value
    })
    return Maior
}

let numeros = [15, 37, 7, 22, 14];
// Seu código aqui
console.log(encontrarMaiorNumero(numeros));  // Resultado esperado: 22

const removerDuplicatas = elements => {
    const new_array = []
    elements.forEach(value => {
        if (new_array.indexOf(value) === -1) new_array.push(value)
    })
    return new_array
}
let elementos = ['maçã', 'banana', 'laranja', 'maçã', 'uva', 'banana'];
// Seu código aqui
console.log(removerDuplicatas(elementos));  // Resultado esperado: ['maçã', 'banana', 'laranja', 'uva']
const concatenarArrays = (array,array2) => array.concat(array2)
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Seu código aqui
console.log(concatenarArrays(array1, array2));  // Resultado esperado: [1, 2, 3, 4, 5, 6]


