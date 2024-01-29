// exercicio 01 

const ArrayConcat = (...array) => [].concat(array)

const nums = [1,2,3,4]
const strs = ['alvaro','pedro','gabriel']
// console.log(ArrayConcat(nums,strs))

// exercicio 02 

const concatenarComValor = (array,valor) => {
    if (Array.isArray(array)) return [].concat(array,valor)
    if (!Array.isArray(array)) return ['o primeiro paretro não é um array ']
}
// console.log(concatenarComValor([1,2,3],3))

// exercicio 03 

const matrizDeMatrizes = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ];
  
const concatMatriz = array => {
    const NewArray = []
    array.forEach(element => {
        if (Array.isArray(element)) element.forEach(value => NewArray.push(value))
    });
    return NewArray
}
const resultado = concatMatriz(matrizDeMatrizes)
console.log(resultado); // Saída esperada: [1, 2, 3, 4, 5, 6, 7, 8]