// Operadores relacionais são usados para comparar valores e determinar a relação entre eles.Esses operadores sempre irão retorna (true) ou (false),claro dependendo do resultado da comparação 
// operador de igualdade:Verificar se dois valores são iguais.Retorna verdadeiro se os valores forem iguais,caso contrario falso 
console.log(5 == 5)
console.log(1 == 3)
// Operador de diferença:O operador de diferença verifica se dois valores são diferentes,se forem retorna true,caso não seja retorna false 
console.log(5 != 5)
console.log(10 != 2)
console.log('abc' != 'abd')
// O operador maior que ( > ):Esse operador verificar se o valor da esquerda é maior que o da direita,se for retorna verdadeiro  
console.log(10 > 20)
console.log(10 > 2)
// O operador menor que ( < ):Esse operador verificar se o valor da direita é maior que o valor da esquerda,se for ele ira retorna true,caso contrario false 
console.log(2 < 3)
console.log(10 < 12)
// maior ou igual ( >= ):Verificar se o valor da esquerda é maior ou igual ao valor da direta,irá retorna true,caso contrario irá retorna false 
console.log(2 >= 1)
console.log(10 >= 11)
console.log(2 >= 2)
// menor ou igula ( <= ):esse operador menor ou igual verificar se o valor da esquerda é menor ou igual ao valor da direita,se for irá retorna true,caso contrario irá retorna false 
// também podemos comparar tipos diferentes 
console.log(1 == '1') // aqui teremos o resultado true,já que ele ignorar o tipo do dado e comparar o valor 
console.log(1 === '1') // operador de igualdade restrista verifica o tipo de dado e não so o valor 
console.log(1 != '1')//aqui teremos false já que ele ignorar o tipo de dado e so pega o valor 
console.log(1 !== '1')//operador de diferença restrita aqui teremos true,já que alem de comparar o 

const datas = {
    d1: new Date(0),
    d2: new Date(0),
    imprimir:function(){
        return this.d1 === this.d2
    }
}
const {imprimir} = datas
const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 == d2) // aqui teremos false,já que ele irá esta comparando o endereço de memoria das variaveis 
console.log(d1.getTime() == d2.getTime()) // aqui teremos true já que ele irá esta comparando as datas e não o endereço de memória   
console.log(undefined == null )//aqui teremos true,uma perculiaridade do js 
console.log(undefined === null)//aqui teremos false 
//recomendado usa o instritamente === para verificar se um valor é igual a outro,para não tamos misturando tipos 