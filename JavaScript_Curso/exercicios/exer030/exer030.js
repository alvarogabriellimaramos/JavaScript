// exercicio 1 
const livros = [
    { id: 1, titulo: 'Aprendendo JavaScript', autor: 'John Doe', paginas: 200 },
    { id: 2, titulo: 'Python para Iniciantes', autor: 'Jane Smith', paginas: 250 },
    { id: 3, titulo: 'React: Guia Prático', autor: 'Alice Johnson', paginas: 180 }
];

const AutoresAndTitulos = livros.map(object => {
    return {titulo:object.titulo,autor:object.autor}
})
console.log(AutoresAndTitulos)
// exercicio 2 
// Output: [81, 64, 25, 16, 9, 4]

const numeros = [5, 2, 8, 1, 9, 3];
let primeiro = numeros[0]
const NumerosAoQuadrado = numeros.map(number => number * number).sort((a,b) => b - a)
console.log(NumerosAoQuadrado)
// exercicio 3 
const palavras = ['JavaScript', 'é', 'muito', 'poderoso'];
const StringUnica = palavras.map(str => str).toString()
console.log(StringUnica)