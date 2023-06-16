// métodos em array ajuda nas suas manupulação 

// método concat(),irá juntar dois ou mais array em unico array,esse método não modificar os array originais 
const list = [1,2,3]
const list_2 = [4,5,6]
const new_list = list.concat(list_2)
console.log(new_list)
const fn_indice = (array,array_2)=> {
    for (let c in array){
        if (array[c] == 5 ){
            var new_array = array.concat(array_2)
        }
    }
    return new_array
}
console.log(fn_indice([1,2,3,4],[4,5,6,7]))
const fn_str = (array,array_2) => {
    for (let c of array){
        if (c == 'Alvaro'){
            var new_array = array.concat(array_2)
        }
    }
    return new_array
}
console.log(fn_str(['Alvaro','Gabriel','Lima'],['Pedro']))

// método join(),esse método une todos os elementos dentro de um array em uma unica string,o array original não é modificado 
const array = [1,2,3]
console.log(array.join(' > '))// dentro dos parenteses do join podemos colocar um seperador especifico
const unir = (array) => {
    if (array[0].indexOf('A') != -1){
        var str = array.join(' ')
    }
    return str
}
console.log(unir(['Alvaro']))

// Método push,adicionar elementos no final de um array e retorna o novo comprimento do array,ele modifica o array original  
const array_2 = [1,2]
const new_array = array_2.push(3,4)
console.log(array_2)
// método pop(),irá remover o ultimo elemento de um array,ele modifica o array original 
array.pop()
console.log(array)
// método shift(),irá remover o primeiro elemento de um array,ele irá modifica o array original 
array.shift()
console.log(array)
// método unshift(),ele irá adicionar um ou mais elementos no inicio do array,ele modifica o array original 
array.unshift(1,3,'a')
console.log(array.sort())
// método indexOf(),irá retorna o indice que o elemento é encontrado caso o elemento não seja encontrado ele irá retorna -1,ele realizar uma busca linear dentro do array,como se fosse um loop 
console.log(array.indexOf('a'))