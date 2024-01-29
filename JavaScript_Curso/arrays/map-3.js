// Simulando o map e entendendo o seu funcionamento
Array.prototype.map2 = function(callback){
    let NewArray = []
    let value;
    for (let c = 0; c < this.length;c++){
        value = callback(this[c],c,this)
        NewArray.push(value)
    }
    return NewArray
}

const carrinho = [
    '{"nome":"Borracha","preço": 3.45}',
    '{"nome":"Notebook","preço": 3500}',
    '{"nome":"Caderno","preço": 10.26}',
    '{"nome":"Bolsa","preço": 25.62}',
    '{"nome":"Caneta","preço": 3.56}',
    '{"nome":"Lapizeira","preço": 3.62}'
]
const Preços = carrinho.map2(object => {
    const Json = JSON.parse(object)
    return Json.preço
})
console.log(Preços)