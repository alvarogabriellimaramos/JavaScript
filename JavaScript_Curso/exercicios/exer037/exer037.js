// exercicio 1 
const numeros = [10, 5, 8, 2, 7];

const media = numeros.reduce((soma,atual) => {
    const total = soma += atual
    return total
})
console.log(`Media ${media / 2}`)

// exercicio 2 

let palavras = ["maçã", "banana", "uva", "abacaxi"];

const concat = palavras.reduce((concant,string) => concant + ' ' + string,' ')
console.log(concat)

palavras = ["gato", "cachorro", "gato", "pássaro", "cachorro", "gato"];




// exercicio 3 

const Tarefas = [
    {
        nome: 'Lava os pratos ',
        criada: '11/03/2014',
        concluida: true 
    },
    {
        nome: 'Limpa o fogão',
        criada: '23/11/2023',
        concluida: false 
    },
    {
        nome: 'Lava as roupas',
        criada: '10/03/2023',
        concluida:true
    },
    {
        nome: 'Lava o banheiro ',
        criada: '06/05/2022',
        concluida: false
    }
]

const TarefasConcluidas = Tarefas.filter(tarefa => {
    if (tarefa.concluida){
        tarefa.criada = new Date(tarefa.criada).toLocaleString()
        return tarefa
    }
})
console.log(TarefasConcluidas)