const numeros = [5, 2, 8, 1, 9, 3];

const quadradosOrdenados = numeros.map(number => number === 1 ? number : number * 2).sort((a,b) => a - b)

console.log(quadradosOrdenados); // Output: [1, 4, 9, 16, 25, 64]


const palavras = ['banana', 'maçã', 'laranja', 'uva'];

// Implemente a ordenação e o mapeamento aqui
const comprimentosOrdenados = palavras.map(value => value.length).sort((a,b) => a - b)
console.log(comprimentosOrdenados); // Output: [3, 4, 6, 7]

// exercicio 02
const livros = [
    { titulo: 'Aprendendo JavaScript', paginas: 200 },
    { titulo: 'Python para Iniciantes', paginas: 250 },
    { titulo: 'React: Guia Prático', paginas: 180 }
  ];
  
const titulosOrdenados = livros.sort((a,b) => b.paginas - a.paginas).map(book => book)  
console.log(titulosOrdenados); // Output: ['Python para Iniciantes', 'Aprendendo JavaScript', 'React: Guia Prático']

// exercicio 03 

const strings = ['gato', 'elefante', 'cão', 'pássaro', 'cobra'];

const caracteresOrdenados = strings.map(str => str.length).sort((a,b) => a - b)

console.log(caracteresOrdenados); // Output: [3, 4, 5, 7, 8]

  
