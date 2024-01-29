// simulando o filter
Array.prototype.filter2 = function(callback){
    let NewArray = []
    let value;
    for (let c = 0;c <  this.length;c++){
        value = callback(this[c],c,this)
        if (value) NewArray.push(value)
    }
    return NewArray
}

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
const ProdutosFiltrados = produtos.filter2(produto => {
   if (produto.preco >= 500 && !produto.fragil) return produto 
})
console.log(ProdutosFiltrados)