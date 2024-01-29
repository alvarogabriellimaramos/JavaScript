// exercicio 1 
const numbers = [7,6,5,1,4,10,3,2]
numbers.sort((a,b) => a - b)
console.log(numbers)

// exercicio 2 
const palavras = ['maçã','banana','limão','uva','abacate']
palavras.sort()
console.log(palavras)

// exercicio 3 
const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Charlie', idade: 22 }
  ];
  
pessoas.sort((a,b) => a.idade - b.idade)

console.log(pessoas); // Output: [{ nome: 'Charlie', idade: 22 }, { nome: 'Alice', idade: 25 }, { nome: 'Bob', idade: 30 }]

// exercicio 4 
const strings = ['gato', 'elefante', 'cão', 'pássaro', 'cobra'];

strings.sort((a,b) => a.length - b.length)


console.log(strings); // Output: ['gato', 'cão', 'cobra', 'elefante', 'pássaro']

// exercicio 5

const numeros = [7, 2, 5, 1, 8, 3];

numeros.sort((a,b) => b - a)

console.log(numeros); // Output: [8, 7, 5, 3, 2, 1]


  