// o método concat em array javascript é utilizado para adicionar novos array ou elementos ao um outro array, o método não altera o array original,ao inves disso retorna um novo array 

const numbers = [1,2,3,4]
const nums = [5,6,7,8]
const newArray = numbers.concat(nums,'alvaro',true,false,() => console.log('Function'),[1,[2,3]]) // podemos adicionar quantos array e valores primitivos quisermos
console.log(newArray)