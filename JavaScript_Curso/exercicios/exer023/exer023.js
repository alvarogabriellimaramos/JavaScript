
const fs = require('fs')
async function AsyncFunction(file){
    try{
        const content = await fs.readFile(file)
        return content.toString()
    }
    catch(erro){
        return `Erro ao ler arquivo` + erro
    }
}
AsyncFunction('./teste.json').then(response => console.log(response))
.catch(erro => console.log(erro))
