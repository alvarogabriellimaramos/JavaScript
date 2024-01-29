const alunos = [
    {nome: 'João',nota: 7.3,bolsista: false},
    {nome: 'Maria',nota:9.2,bolsista: true},
    {nome: 'Pedro',nota:9.8,bolsista: false},
    {nome: 'Ana',nota:8.7,bolsista: true }
]

// desafio 1: sabe se todos os alunos são bolsista(return true )
const todosBolsistas = (resultado,bolsista) => resultado && bolsista 

const resultado = alunos.map(({bolsista}) => bolsista).reduce(todosBolsistas)
console.log(resultado)
// Desafio 2: Algun aluno é bolsista ? 
const IsBolsista = (resultado,bolsista) => resultado || bolsista 
const resultado2 = alunos.map(({bolsista}) => bolsista).reduce(IsBolsista)
console.log(resultado2)