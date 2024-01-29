// o método flat() server para transforma um array de multiplas dimensões em apenas uma única dimensão 

// sitaxe do flat()
// let newArray = arr.flat([depth])
/*O método flat retorna um novo array
depth (opcional): A profundidade máxima que desejamos transforma em um unico array,por padrão esse parametro vem com 1
*/
// exemplo 
const numbers = [1,[2,3,4,[5,[6]]]]
const NewNumbers = numbers.flat(3) // nesse exemplo foi preciso passa o depth de 3 para torna o array numbers e em uma unica matriz 
console.log(NewNumbers)

// o método flat é muito útil quando desejamos transforma o array de varias dimensões em uma única dimensão,para facilitar várias operações nos array


const Escola = [
    {
        nome: 'Turma C',
        alunos:[
            {
                nome: 'Gustavo',
                nota:8.3
            },
            {
                nome: 'Maria',
                nota:9.9
            }
        ]
    },
    {
        nome: 'Turma C',
        alunos:[
            {
                nome: 'Correia',
                nota:10.0
            },
            {
                nome: 'Ana',
                nota:7.8
            }
        ]
    },
]

const GetNotasAlunos = (aluno) => aluno.nota
const GetTurmas = Turma => Turma.alunos.map(GetNotasAlunos) 
const Notas = Escola.map(GetTurmas)
console.log(Notas )