// exercicio 1 
const produtos = [
    { nome: 'Laptop', preco: 1200 },
    { nome: 'Smartphone', preco: 800 },
    { nome: 'Tablet', preco: 500 },
    { nome: 'Câmera', preco: 700 }
  ];
  
const produtosOrdenados = produtos.map(produto => produto).sort((a,b) => a.preco - b.preco )
  
console.log(produtosOrdenados); // Output: ['Laptop', 'Câmera', 'Smartphone', 'Tablet']

// exercicio 02
const alunos = [
    { nome: 'Alice', notas: [85, 90, 88] },
    { nome: 'Bob', notas: [78, 92, 80] },
    { nome: 'Charlie', notas: [95, 88, 91] }
  ];
const alunosOrdenados = alunos.map(aluno => aluno).sort((a,b) => {
    b.notas.sort((c,b) => c - b) - a.notas.sort((c,b) => c - b) 
})
console.log(alunosOrdenados); // Output: ['Charlie', 'Alice', 'Bob']

// exercicio 03 
const palavras = ['maçã', 'banana', 'uva', 'morango', 'abacaxi'];

const palavrasOrdenadas = palavras.map(palavra => palavra).sort((a,b) => a.length - b.length)

console.log(palavrasOrdenadas); // Output: ['uva', 'maçã', 'banana', 'morango', 'abacaxi']