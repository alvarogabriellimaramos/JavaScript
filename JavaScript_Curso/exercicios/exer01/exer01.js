const nome = 'Alvaro'
function FilterObject(array){
    const ArrayNew = []
    array.forEach(object => {
        const Values = Object.values(object)
        Values.forEach(value => {
            if (typeof value === 'number' && value >= 16) {
                ArrayNew.push(object)
            }
        })
    })
    return ArrayNew
}
console.log(FilterObject(Persons))