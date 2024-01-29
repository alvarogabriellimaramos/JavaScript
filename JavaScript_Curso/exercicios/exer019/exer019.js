let cores = ['vermelho', 'verde', 'azul', 'amarelo'];
// Seu código aqui
cores.splice(1,2)
console.log(cores);  // Resultado esperado: ['vermelho', 'amarelo']

let frutas = ['maçã', 'banana', 'uva', 'morango'];
// Seu código aqui
frutas.splice(1,2,'pêra','abacaxi')
console.log(frutas);  // Resultado esperado: ['maçã', 'pêra', 'abacaxi', 'morango']

let numeros = [1, 2, 7, 8];
// Seu código aqui
numeros.splice(2,0,4,5,6)
console.log(numeros);  // Resultado esperado: [1, 2, 4, 5, 6, 7, 8]

let letras = ['a', 'b', 'c', 'd', 'e'];
letras.splice(1,3,'x','y','z')
console.log(letras);  // Resultado esperado: ['a', 'x', 'y', 'z', 'e']

let numbers = [1, 2, 3, 4, 5, 6, 7];
// Seu código aqui
numbers.splice(5,6,8,9,10)
console.log(numeros);  // Resultado esperado: [1, 2, 3, 4, 5, 8, 9, 10]



