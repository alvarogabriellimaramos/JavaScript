// as váriaveis são uma parte importante no nosso código 
// no javascript a três maneira de criar uma váriavel (var,let e const),mas atualmente apenas duas são utilizadas (let e const)

//[let] essa palavra chave criar uma váriavel de escopo local e que pode ser alterada ao decorre do nosso código 
let numero = 1 
numero = 2 // variavel alterada com sucesso 
console.log(numero)
//[const] essa palavra chave também criar uma váriavel de escopo local a diferença que essa váriavel é uma constante o que significa que ela não pode ser alterada ao decorre do nosso código,tera um valor fixo 
const nome = 'Alvaro'
nome = 'Gabriel' // erro ao altera váriavel 
console.log(nome) // TypeError: Assignment to constant variable.