// exercicio 1 
let numbers = [10,4,5,21,25,39,1,45,102]
const MaiorQue10 = numbers.filter(num => num > 10 )
console.log(MaiorQue10)
// exercicio 2 

let palavras = [
    'uva',
    'maçã',
    'mamão',
    'geladeira',
    'regua',
    'celular',
    'banana'
]
const PalavrasMaiorQueCincoLetras = palavras.filter(palavra => palavra.length > 5)
console.log(PalavrasMaiorQueCincoLetras)

// exercicio 03 

let produtos = [
    {nome: 'Notebook',preco:2499},
    {nome: 'Geladeira',preco:4500},
    {nome: 'Televisão',preco: 7500},
    {nome: 'Guarda Roupa',preco:6895},
    {nome: 'Mesa',preco:499},
    {nome: 'Sofá',preco:1500},
    {nome: 'Cama',preco: 56.79},
    {nome: 'Panelas',preco:99.45}
]
const PromoçãoProdutos = produtos.filter(produto => produto.preco < 100)
console.log(PromoçãoProdutos)

// exercicio 04 
const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Charlie', idade: 22 },
    {nome: 'Alvaro',idade: 18},
    {nome: 'Gabriel', idade:16},
    {nome: 'Pedro',idade: 13}
];
const MenoresDeIdade = pessoas.filter(pessoa => pessoa.idade <= 18)
console.log(MenoresDeIdade)

// exercicio 05 

numbers = [11,1,2,4,7,17,13,24]

const NumerosPrimos = numbers.filter(num => {
    for (let c = 2;c <= num;c++) {
        if (num % c === 0) return false 
        else{return true }
    }
})
console.log(NumerosPrimos)

// exercicio 06 

palavras = ['reviver','ame a ema','ola mundo']
const Palidromos = palavras.filter(frase => {
    const fraseLimpa = frase.toLowerCase().split('').join('')
    const Palidromo = frase.split('').reverse().join('')
    if (fraseLimpa === Palidromo) return true 
})
console.log(Palidromos)

// exercicio 07 

let tipos = [1,2,true,'aa','bb',7,8]
const nums = tipos.filter(num => typeof num === 'number'? true:false)
console.log(nums)

let produto2 = [
    {nome: 'Notebook',preco:2499,estoque:10},
    {nome: 'Geladeira',preco:4500,estoque:5},
    {nome: 'Televisão',preco: 7500,estoque:11},
    {nome: 'Guarda Roupa',preco:6895,estoque:4},
    {nome: 'Mesa',preco:499,estoque:1},
    {nome: 'Sofá',preco:1500,estoque:2},
    {nome: 'Cama',preco: 56.79,estoque:7},
    {nome: 'Panelas',preco:99.45,estoque:1}
]
const OrganizadoProdutos = produto2.sort((a,b) => b.estoque - a.estoque).map(produto => produto.nome)
console.log(OrganizadoProdutos)