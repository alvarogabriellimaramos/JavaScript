const palavras = ['limão','mesa','amedoin','olho','eita','mamão']
const vogais = ['a','e','i','o','u']
function FilterArray(){
    const NewArray = []
    palavras.forEach(frase => {
        const Primeiro = frase.split('')[0]
        if (vogais.indexOf(Primeiro) === -1) NewArray.push(frase)
    })
    return NewArray
}
console.log(FilterArray())