// o operador de desitruturação é uma forma de extrair atributos,métodos e elementos de uma estrutura,como array e objetos,lembrando que isso é um recuso novo indroduzindo no ES2015

const pessoa = {
    nome: 'Alvaro',
    idade: 18,
    endereco: {
        rua: 'cento e quarenta e oito',
        numero: '232'
    }
} // a forma de desitruturação é uma forma mais simplificada para extrarir elementos e atributos dentro de estruturas como array e objetos por exemplo,quando se tratar de um objetos usamos as {nome,idade} e colocamos os indentificadores que queremos extrarir
const { nome, idade, endereco } = pessoa
console.log(endereco)
// caso coloquemos uma chave que não se encontra no objeto,teremos o retorno de undefined que é a forma que o js usa para dizer que algo não tem valor ou não foi encontrado 
//mas podemos adicionar um valor padrão na desitruturação,usando o =,aqui eu estou dizendo 'caso você não encontre a chave mensagem retorne por padrão o valor verdadeiro '
const { sobrenome, mensagem = true } = pessoa
console.log(sobrenome, mensagem)
// digamos que queremos desistruturar um objeto que está dentro de um outro objeto,fazemos da seguinte forma 
const { endereco: { rua, numero } } = pessoa
console.log(rua)
// tambem podemos desistruturar um objeto dentro de uma função 
const objeto = {
    nome: 'Alvaro',
    salario: 3500,
    profissão: {
        profissão_1: 'Programador',
        profissão_2: 'Engenheiro',
        profissão_3: 'Eletricista',
        demissões: {
            demissões_1: 'Foi demitindo a dois anos a trás',
            demissões_2: 'Foi demitindo a 1 ano atrás'
        }
    },
    imprimir: function () {
        const { profissão_1, profissão_2 } = profissão
        return profissão_1
    }
}
const { profissão, imprimir } = objeto
console.log(imprimir())
const { profissão: { demissões: { demissões_1, demissões_2 } } } = objeto
console.log(demissões_1)
// também podemos mudar os nomes das chaves do objetos,da seguinte forma 
const { nome: n, salario: s } = objeto
console.log(n)
// caso acessemos um objeto de forma aninhada que não exista,ao inves de termos unfined teremos um erro 
const {conta:{age,senha}} = pessoa 
console.log(age,senha) // output erro 
// lembrando que a desestruturação simplifica a forma como vamos obter os valores de um objeto e array e atribuir esses valores a variaveis 
