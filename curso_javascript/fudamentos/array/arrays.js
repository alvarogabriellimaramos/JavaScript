// Array são estruturas de dados que permiter armazena e guarda multiplos dados em uma unica variavel,também server para organização,cada valor dentro de um array terá um indice,todo indice dentro de um array irá começa com zero 
const array = [7.7,9.9,6.2,8.0]
// caso acessemos um indice de um array que não existe teremos um valor undefined 
console.log(array[4]);
// podemos atribuir valores a um array 
array[4] = 10 
console.log(array)
// se fizemos dessar forma ele irá deixa um indice vazio < quantidade de indice vazio empty item> 
array[6] = 10 
console.log(array)
// podemos usar o lenght para dizer quantos elementos temos dentro de um array 
console.log(array.length)
// podemos usar o push para adicinar elementos no ultimo indice do array 
array.push(true,false,{id: 2},'texto')
console.log(array)
// podemos usar o pop para retirar o ultimo elemento de dentro de um array,o pop irá retorna o ultimo elemento deletado 
console.log(array.pop())
console.log(array)
// outra forma de excluir elementos dentro de um array é usando o delete 
const del = delete array[1]
console.log(array)
// um array em javascript é do tipo object 
console.log(typeof array)
// lembrando que não é uma boa pratica mistura tipos de dados dentro de um array,lembrando tambem que os elementos indexOf,o método join tambem é valido no array