const peso1 = 1.0
const peso2 = Number('2.0')
const str = String('ola')
console.log(peso1,peso2,str)
// método para saber se o valor de algum numero ou variavel é um valor inteiro 
if (peso2 == Number.isInteger(peso2)){
    console.log('valores inteiro')
}
// calculo aritmetico 
const conta_1 = 10.2321
const conta_2 = 10.8762
const média = conta_1 * peso1 + conta_2 * peso2
const média_2 = média / (peso1 * peso2)
// método para controlar as casas decimais,lembrando que a funçao toFixed não ira meche no valor da variavel   
console.log(média_2.toFixed(1))
// transformando numerico em string 
let str_2 = média_2.toString()
console.log(str_2)
//transformando a string em um valor binario,adicionamos o valor 2 dentro do toString
str_2 = média_2.toString(2)
console.log( typeof str_2)
// lembrando que Number com o N maiusculo é uma função e number com o n minusculo é um tipo de dado 
