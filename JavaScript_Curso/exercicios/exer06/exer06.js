const fsp = require('fs').promises
const fs = require('fs')
const AsyncWriteFile = (file,write) => {
    return new Promise((resolve,reject) => {
        if (file.length < 6) {
            reject('Erro ao criar arquivo')
           return;
        }
        else{
            const JsonWrite = JSON.stringify(write)
            fsp.writeFile(file,JsonWrite).then(() => resolve('Arquivo gravado com sucesso'))
            .catch(() => reject('Erro ao grava arquivo'))
        }
    })
}
AsyncWriteFile('./teste.json','asdasd').then(response => console.log(response))
.catch(error => console.log(error))
function AsyncReadFile(file){
    return new Promise((resolve,reject) => {
        fs.readFile(file,(error,response) => {
            if (error) {
                reject('Erro ao ler file' + error)
                return;
            }
            resolve(response.toString());
        })
    })
}
AsyncReadFile('./teste.json').then(response => console.log(response))
.catch(error => console.log(error))