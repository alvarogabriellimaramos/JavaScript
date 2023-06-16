// Usando o valor math.pow teremos o valor da potencia de um numero 
const num = 10
const poten = Math.pow(num,2)
console.log(poten)
let num_1 = 10 
let num_2 = 20 
// metodo math.max irá retorna o valor maximo entre dois numeros ou mais ,o maior valor
// metodo math.min,irá retorna o menor valor entre dois ou mais numeros. 
const max_num = Math.max(num_1,num_2)
const min_num = Math.min(num_1,num_2)
console.log(max_num)
console.log(min_num)
// método math.abs irá retorna um valor positivo indepedente do sinal do numero 
console.log(Math.abs(-100))
// método math.ceil ira arredonda o numero para cima 
console.log(Math.ceil(3.2))
// método math.floor server para arredonda um numero para baixo,ele é o inverso do math.ceil 
console.log(Math.floor(3.9))
// já o método math.round irá arredonda para o numero inteiro mas proximo 
console.log(Math.round(5.4))
// método math.random irá retorna um numero aleatorio 
console.log(Math.round(Math.random(10)*100))
// usando a função Math.sqrt teremos a raiz quadrada de um numero 
const raiz_sqrt = Math.sqrt(4)
console.log(raiz_sqrt)
// Math.pi uma constante,ou seja seu valor não ira mudar,essa constante representa pi 
console.log(Math.PI) 