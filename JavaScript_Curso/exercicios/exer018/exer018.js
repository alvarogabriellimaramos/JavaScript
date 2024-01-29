function length(array){
    let contador = 0
    for (let c of array) contador++
    return contador 
}
const array = ['alvaro','pedro','gabriel']
console.log(length(array))