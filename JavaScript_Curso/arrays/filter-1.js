/// o método filter é um método javascript que retorna um novo array dos elementos que passar pelo teste fornecido por uma callback,em outras palavras ele filtra os elementos do array com base em uma operação especifica 

// sitaxe 
// const newArray = arrayOriginal.filter(function(element,index,array))

// a função callback passada como argumento no filter,deve retorna true,se o valor 'true or false',se o valor retornado for 'true',o elemento é incluindo no novo array resultante,se for false o elemento é excluido

// exemplo simples 
const numeros = [1,2,3,4,5,6,7,8]
const newArray = numeros.filter(value => value % 2 === 0)
console.log(newArray)

const produtos = [
    {nome: 'Notebook',preco:2499,fragil:true},
    {nome: 'Geladeira',preco:4500,fragil:false},
    {nome: 'Televisão',preco: 7500,fragil:true},
    {nome: 'Guarda Roupa',preco:6895,fragil:false},
    {nome: 'Mesa',preco:499,fragil:false},
    {nome: 'Sofá',preco:1500,fragil:false},
    {nome: 'Cama',preco: 650,fragil:false},
    {nome: 'Panelas',preco:105,fragil:false}
]
const ProdutosFiltrados = produtos.filter(produto => {
    if (produto.preco >= 500 && produto.fragil) return produto
})
console.log(ProdutosFiltrados)