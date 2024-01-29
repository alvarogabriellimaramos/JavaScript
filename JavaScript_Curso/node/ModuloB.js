// para importa uma propriedade de um outro modulo,utilizamos o require
// aqui estamos utilizando a desetruturação,já que no moduloA atribumos a um objeto
const {Nome,soma,Imprimir} = require('./ModuloA')
console.log(Imprimir(Nome)) 
 