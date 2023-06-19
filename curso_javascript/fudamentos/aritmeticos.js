// operadores artimeticos são operadores que servem para fazer calculos matemáticos dentro dos nossos codigos, são eles ( +, - , /)
const [a,b,c,d] = [3,5,1,15]
let n = 2 
console.log( n++ ) // aqui teremos um resultado de 2 já que estamos fazendo uma operação pos-incremento e o console.log irá imprimir o valor antes do incremento 
// também temos o operador antes-incremento 
console.log(++n) // aqui ele irá imprimir 3 já que estamos fazendo uma operação pre-incremento,ou seja estamos fazendo uma operação antes de ser impresso no console 
console.log(-n) // podemos fazer assim para deixa uma variável com o valor numero negativa  (operador unário)
// lembrando que temos a ordem procedencia que nosso calculo aritemetico irá seguir essa ordem 
const soma = a + d 
const subtracao = c - a 
const multiplicação = a * b 
const divisão = b / a 
const modulo = b % a
console.log(soma,subtracao,multiplicação,divisão,modulo) // lembrando que todos esses calculos são feitos atráves de operadores binarios ou seja operadores que realizar operações em dois operandos(valores) 

/* lebrando também que operadores binários também,são: 
operadores de atribuição
operadores de comparação 
operadores logicos 
*/


