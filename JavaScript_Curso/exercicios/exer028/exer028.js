// Crie uma função que recebe uma array de strings e retorna uma Promise que resolve com uma única string resultante da concatenação de todas as strings da array.

function ConcatString(array){
    return new Promise((resolve, reject) => {
        let StringConcat = ''
        if (!Array.isArray(array)) reject('Erro,tente novamente')
        array.forEach(str => {
            StringConcat += str
        })
        resolve(StringConcat)
    })
}
const strings = ['alvaro','gabriel','lima','ramos']
ConcatString(strings).then(response => console.log(response))