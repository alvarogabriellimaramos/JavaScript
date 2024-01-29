const nomes = ['alvaro','gabriel','lima','ramos']
nomes.pop() // remove o ultimo elemento do array 
console.log(nomes)
nomes.push('pedro') // adicionar um elemento no array na ultima posição
console.log(nomes)
nomes.shift() // remove o primeiro elemento do array 
console.log(nomes)
nomes.unshift('alvaro') // adicionar um elemento na primeira posição do array 
console.log(nomes)

// splice pode adicionar e remove elementos de um array 
// adicionar 
nomes.splice(4,0,'correia') // o primeiro parametro é o indice que desejamos adicionar remove ou substituir elementos,já o segundo indice é a quantidade de elementos que serão adicionados ou removidos de acordo com o indice,o terceiro parametro é são os elementos especificos que desejamos adicionar ou substituir
console.log(nomes)
// remover 
nomes.splice(1 ,2)
console.log(nomes)
// o método slice retorna um novo array a parti do indice que especificamos,por exemplo,estamos passado o indice um,ele irá nos retorna um novo array com o elemento de indice um e elementos de indice adiante,deixando o indice zero de fora da lista 
const algunsNomes = nomes.slice(1) // em resumo o slice é pega uma parte do array,um pedaço,retornando um novo array com esse pedaço 
console.log(algunsNomes)
const algunsNomes2 = nomes.slice(0,2) // podemos passar assim também,dizemos onde começa e onde termina 
console.log(algunsNomes2)