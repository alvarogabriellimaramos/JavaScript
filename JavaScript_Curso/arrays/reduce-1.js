// o método reduce é um método de array javascript utilizado para reduzir o array em um único elemento,não obrigatoriamente,podemos transforma ele em string,numeros,em outro array,ele funciona praticamente da mesma forma que os métodos anteriores,interado a função callback em cada um dos elementos do array e retornara um resultado final que pode ser,numero,string,objeto e etc...

// sitaxe,a sitaxe é um pouco diferente dos outros métodos anteriores 

// array.reduce(callback,valorInicial)
// a função callback recebe quatro argumentos,acumulador,valor atual,indice atual e o array em si,o acumulado é o valor acumulado ate o momento
// valor inicial (opcional),esse é o valor inicial do acumulador que irá intera com o segundo parametro (valorAtual),se esse parametro não for colocado o acumulado irá começa com o primeiro elemento do array 

// nesse exemplo o acumulado começa com o valor inicial zero 
const numbers = [1,2,3,4,5]
const total = numbers.reduce((acumulado,valorAtual) => {
    return acumulado += valorAtual
},0)
console.log(total)

// exemplo com strings 

const frase = ['Eu','amo','python']

const fraseFinal = frase.reduce((acumulador,inicial) => {
    return acumulador + ' ' + inicial
})
console.log(fraseFinal)

const produtos = [
    {nome: 'Notebook',preco:2499,fragil:true},
    {nome: 'Geladeira',preco:4500,fragil:false},
    {nome: 'Televisão',preco: 7500,fragil:true},
    {nome: 'Guarda Roupa',preco:6895,fragil:false},
    {nome: 'Mesa',preco:499,fragil:true},
    {nome: 'Sofá',preco:1500,fragil:false},
    {nome: 'Cama',preco: 650,fragil:false},
    {nome: 'Panelas',preco:105,fragil:false}
]

const resultado = produtos.map(produto => produto.preco).reduce((acumulado,valorAtual) => {
    return acumulado += valorAtual
})
console.log(resultado)