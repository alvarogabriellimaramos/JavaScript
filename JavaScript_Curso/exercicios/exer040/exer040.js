const nomes = ['pedro','gabriel','alvaro','ana','altonio']
let texto = 'alvaro'.split('').splice(1,2)
console.log(texto)
const ArrayFilter = array => {
    const NewArray = array.filter(string => {
        const StringSplit = string.split('')[0]
        if (StringSplit === 'a') return string 
    })
    const ArrayUpper = NewArray.map(string => string.toUpperCase())
    return ArrayUpper
}
console.log(ArrayFilter(nomes))