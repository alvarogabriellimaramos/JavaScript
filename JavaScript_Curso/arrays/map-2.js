const carrinho = [
    '{"nome":"Borracha","preço": 3.45}',
    '{"nome":"Notebook","preço": 3500}',
    '{"nome":"Caderno","preço": 10.26}',
    '{"nome":"Bolsa","preço": 25.62}',
    '{"nome":"Caneta","preço": 3.56}',
    '{"nome":"Lapizeira","preço": 3.62}'
]
const Preços = carrinho.map(object => {
    const produtos = JSON.parse(object)
    return produtos.preço
})
console.log(Preços)