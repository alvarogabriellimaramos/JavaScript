// A função map em array javascript é utilizada para criar um novo array com uma callback passada,por exemplo a função map irá criar um novo array a parti da aplicação da função em cada elemento do array,ou seja o map irá percorre todos os elementos do array e aplica a função callback retornando um novo array com a operação especifica.OBS:não altera o array original 

// sitaxe 
// const NewArray = array.map(callback(elemento,indice,arrayOriginal))  // sitaxe semelhante ao do forEach 

const numbers = [1,2,3,4,5,6,7,8,9,10]
const ArrayDobro = numbers.map(value => value * 2)
// o map server para criar um novo array com a mesma quantidade de elementos,mas com os tipos de dados tranformados 
// o map é um for com proposito ou seja,alem de percorre o array,ele tem uma função especifica que é altera o tipo de dados dos elementos dentro do array
console.log(ArrayDobro)
/// se não retornamos nada o valor do array será undefined
const soma10 = e => e + 10 
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
// utilizando varias vezes o map em uma unica linha,lembrando que isso não é recomendado por que pode deixa o código mas dificil para leitura 
let resultado = numbers.map((triplo)).map(soma10).map(paraDinheiro)
console.log(resultado)