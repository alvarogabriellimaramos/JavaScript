const alunos = [
    {nome: 'João',nota: 6},
    {nome: 'Alvaro',nota: 7},
    {nome: 'Pedro',nota: 8},
    {nome: 'Maria',nota: 5}
]
// digamos que queremos criar um sistema que pegue todas as notas do aluno e mostre o total das notas de todos os alunos 

// Imperativo,a programação imperativa foca nos detalhes para soluciona um problema,demonstrado passo a passo como soluciona-lo
// por exemplo digamos que eu queria soma todas as notas dos alunos,apenas notas pares 
// a programação imperativa utiliza estruturas de controle de fluxo,como loop,condicionais,para gerencia o fluxo de exercução e ter maior controle no código 
let total1 = 0 
for (let c of alunos ) {
    if (c.nota % 2 === 0) total1 += c.nota 
}
console.log(total1)

// programação declarativa, a programação declarativa foca em resolver os problemas deixando de lado a maioria dos detalhes especificos de como alcança-lo

// foca na utilização de funções ordem superior e abstrações

// é muitas vezes mais légivel que a programação imperativa,já que foca na inteção do código e não em detalhaes ou operações especificas 

// e permiter uma maior reutilização de código pois as funções e abstrações podem ser usadas em diferentes contextos 

// agora digamos que eu queira mutitplica todas as notas por elas mesmo de uma forma declarativa e depois soma-las em um unico elemento

const Notas = aluno => aluno.nota * aluno.nota
const Total = (contador,valorAtual) => contador += valorAtual

const NotasPow = alunos.map(Notas).reduce(Total)
console.log(NotasPow) // 174

// em resumo a forma imperativa se preocupa com os detalhes especificos para resoluciona os problemas,enquanto a programação declarativa se preocupa apenas no objetivo final,sendo mais objetiva e direta ao ponto e mais facil de entender,ambos os contexto são muito utilizado na programção 
const numbers = [1,2,3,4,5,6]
// imperativo 
let double = function (array){
    const results = []
    for (let c = 0;c < array.length;c++) results.push(array[c] * 2)
    return results 
}
console.log(double(numbers))
// declarativo 
double = array => array.map(num => num * 2 )
console.log(ArrayDobro(numbers))