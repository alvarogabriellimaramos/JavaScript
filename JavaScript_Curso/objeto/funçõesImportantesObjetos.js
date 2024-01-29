// funções Importantes em Objetos JavaScript 
function Person(nome,idade,peso){
    return{nome,idade,peso,Teste(){
        return 'Ola'
    }}
}
// 1 - Object.keys(),server para pegar todas as chaves de um objeto

const pessoa1 = Person('alvaro',18,1.65)
const KeysObject = Object.keys(pessoa1)
// O object.keys retorna um array,podemos usa todos os métodos de um array 
KeysObject.forEach(key => console.log(key))

// 2 - Object.values(),serve para pegar todos os valores de um objeto 
// Irá retorna um array tendo os valores do objeto inteiro 
const ValuesObject = Object.values(pessoa1)
// também podemos utiliza todos os métodos de um array 
ValuesObject.forEach(value => console.log(value))

// 2 - Object.entries(),server para fornecer um array de chave e valor 
const EntriesObject = Object.entries(pessoa1)
// utilizando o operador de desestruturação em parametro de uma função 
EntriesObject.forEach(([chave,valor]) =>console.log(chave,valor) )
// O Object.entries() retorna um array maior e dentro de array ele irá retorna sub-array que contém as chaves e valores.

// Object.defineProperty
Object.defineProperty(pessoa1,'DatadeNascimento',{
    // um booleano que indica se a propriedade pode ser usada em interações,se irá ser listada quando usamos o object.keys ou um for in,nesse caso está como sim (true)
    enumerable: true,
    // um booleano que indica se a propriedade pode ser alterada,nesse casa está como não(false)
    writable: false,
    // Valor a ser atribuindo a propriedades (opcional)
    value: '01/01/2008'
})
// Object.defineProperty é util para definir e controla propriedade com mas segurança,podemos implementa a logica de get/set.
pessoa1.DatadeNascimento = '2004'// propriedade que não aceita se reescrita
console.log(pessoa1.DatadeNascimento)
console.log(Object.keys(pessoa1))

// Object assign,ele irá copia as propriedade de um ou mais objeto para um objeto de destino
const dest = {a:4}
const o1 = {b:5,d:{e:8}}
const o2 = {c:7,a:2}
const obj = Object.assign(dest,o1,o2)
console.log(obj)
