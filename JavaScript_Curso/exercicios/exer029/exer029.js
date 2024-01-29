// exercicio 1 
const palavras = ['olá','cadeira','sei la']
const capitalize = palavras.map(frase => {
    return frase.split('')[0].toLocaleUpperCase() + frase.slice(1)
})
console.log(capitalize)
// exercicio 2 
const LengthPalavra = palavras.map(frase => frase.length)
console.log(LengthPalavra)

// exercicio 3 
const temperaturasCelsius = [0, 10, 20, 30];
// formula

const Fahrenheit = temperaturasCelsius.map(temperatura => (temperatura * 9/5) + 32)
console.log(Fahrenheit)

// exercicio 4
const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Charlie', idade: 22 }
  ];
const Nomes = pessoas.map(object => object.nome)
console.log(Nomes)
// exercicio 5 
const datasString = ['2023-11-15', '2023-12-02', '2024-01-10'];
const Time = datasString.map(data => new Date(data).toDateString())
console.log(Time)

// exercicio 6 
const arraysDeNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
const SomaTotal = arraysDeNumeros.map(subArray => {
    return subArray.map(number => number += number)
})
console.log(SomaTotal)