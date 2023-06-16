// Quando dividimos qualquer numero por zero temos o resultado Infinity que é um tipo de dado 

console.log(2 / 0)
const infinity = Infinity

// outro exemplo de que javascript é uma linguagem fracamente tipada é esse,ele irá analisar a string e irá ver se essa string pode ser convertido para um valor numerico,lembrando que se formos colocar um valor float em uma variavel devemos utilizar o . e nao a virgula  

console.log('9' / 2) // se colocamos um valor que não seja um numero dentro da string iremos receber um NaN,por exemplo 
// podemos usar o + para concatenar uma string numerica com um numero 
console.log('7' + 2 ) // aqui ao inves de fazer o calculo igual o 9/2 ele irá concatena,ja que faz sentido ele operar a concatenação em um tipo numero string,mas se colocamos um - ou um / ele irá operar os calculos normalmente 
console.log('Olá' / 2)

console.log(0.7 + 0.1) // essa conta resultaria em um problema de precisão ao inves 0.8,os problemas de precisão nos JavaScript refere-se ao problemas de calculos de numeros float no js,isso pq o js utiliza o padrão ieee754 que significa que alguns numeros de ponto flutuante terão problemas para ser impressos,lembrando que isso é importante saber,já que algumas operações podem dar problema e não ter o resultado desejado 
const num = 10
console.log(num.toString())