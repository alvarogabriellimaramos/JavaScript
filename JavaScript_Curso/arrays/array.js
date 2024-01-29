// array são estruturas de dados responsáveis por armazena outro tipos de dados,string,boolean,number,function etc... o array no javascript não tem um tipo de dado especifico,por isso ele é considerado um objeto 
const array = []
console.log(typeof array)
// boa pratica: trabalha com dados do mesmo tipo em array 

let aprovados = ['Bia','Carlos','Ana']
// acessamos os index de um array atráves dos colchentes o index de um array começa com zero
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // se tentarmos acessar um index que não existe no array,teremos um retorno de undefined

// podemos adicionar um elemento na ultima posição do array 
aprovados.push('Gabriel')
// verificando o tamanho do array 
console.log(aprovados.length)
// colocamos um valor em um indice muito maior que o array,por exemplo colocamos um valor no indice oito,o array agora passara ate 7 indice,os outros 5 indices terão valor undefined 
aprovados[8] = 'Alvaro'
console.log(aprovados)
console.log(aprovados[7] === undefined) // retorna true 
aprovados.sort() // essa função irá ordenar o array em ordem alfabetica,a função sort também aceita uma função callback onde podemos ordenar o array do nosso jeito,o array original é alterado
console.log(aprovados)

// excluindo indices 
delete aprovados[1]

// reatribuindo um novo array 
aprovados = ['Bia','Carlos','Ana']
// a função splice server para reatribuir um elemento em um determinado index e também server para excluir elementos de um determinado index,o primeiro parametro diz para o array aonde vai começa a substituição/remoção,o segundo parametro indica a quantidade de elementos a serem removidos

// removendos elementos
aprovados.splice(1,2) // remove dois elementos a parti do indice um
// adicionar elementos ao array 
aprovados.splice(1,0,'Gabriel')
// substituindo elementos
aprovados.splice(0,1,'Maria')
// a função split retorna um novo array com os elementos removidos 
aprovados.push('Lima')
const nomes = aprovados.splice(0,1)
console.log(nomes)
console.log(aprovados)

