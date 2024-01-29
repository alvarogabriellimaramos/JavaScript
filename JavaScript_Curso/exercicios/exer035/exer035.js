// exercicio 1 
let numbers = [1,10,4,3,5,22,6,0]
const pares = numbers.filter(num => num % 2 === 0).sort((a,b) => a - b)
console.log(pares)

let palavras = [
    'uva',
    'maçã',
    'mamão',
    'geladeira',
    'regua',
    'celular',
    'banana'
]
const LengthFrases = palavras.filter(str => str.length > 4).map(str => str.length)
console.log(LengthFrases)

numbers = [1,10,51,65,78,105,21,35,41,204]

const MaiorQue50 = numbers.filter(num => num > 50).map(num => num * 2)
console.log(MaiorQue50)
