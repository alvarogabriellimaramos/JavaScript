function Produto( nome,preço){
    return {nome,preço}
}
const carrinho = []
const ProductsNames = []
function AddProduct(produto){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                if (ProductsNames.indexOf(produto.nome) === -1){
                    carrinho.push(produto)
    
                    ProductsNames.push(produto.nome)
    
                    resolve('Produto adicionado ao carrinho')
            }
                reject('Erro ao adicionar produto ao carrinho')
            }
            catch{
                reject('Erro ao adicionar produto ao carrinho')
            }
        },2000)
    })
}
const produto1 = Produto('Computador',2000)
const produto2 = Produto('Tablet',1324)
async function AsyncFunctionAddProduct(product){
    AddProduct(product).then(response => console.log(response))
 .catch(error => console.log(error))
}
AsyncFunctionAddProduct(produto1)
AsyncFunctionAddProduct(produto2)
function CalculadoTotalDePreço(array){
    let soma = 0
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                array.forEach(product => soma += product.preço)
                resolve(soma)
            }
            catch{reject('Erro ao fazer soma ')}
        },2000)
    })
}
CalculadoTotalDePreço(carrinho).then(response => console.log(response))
