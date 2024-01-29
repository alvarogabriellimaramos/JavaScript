const pai = {nome: 'Pedro',corCabelo: 'preto'}

// podemos criar uma herança já com o prototipo pai,por exemplo 

const filho1 = Object.create(pai)

// dentro do Object.create podemos utilizar as mesmas propriedade do Método defineProperty

const filha2 = Object.create(pai,{
    nome: {
        value: 'Maria',writable:false,enumerable:true
    }
})
// método hasOwnProperty é utilizando para ver se existe uma propriedade em um objeto especifico antes de acessa-la,ele retorna true se a propriedade existir e retorna false caso a propriedade não exista, o hasOwnProperty é muito utilizando para saber se uma propriedade de algum objeto é realmente dele mesmo ou se veio por herança de outro objetos 

console.log(filha2.hasOwnProperty('nome')) // true 
// função responsavel por saber os atributos que são de heranças e os que não são de heranças 
const FunctionPropertyObject = object => {
    for (let key in object){
        object.hasOwnProperty(key) ? console.log(key) : console.log(`Herança ${key}`)
    }
}
FunctionPropertyObject(filha2)