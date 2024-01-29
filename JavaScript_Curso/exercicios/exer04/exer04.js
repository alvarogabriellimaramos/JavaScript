const fs = require('fs').promises
function WriteFile(file,write){
    const ListWrite = [write]
    const JsonWrite = JSON.stringify(ListWrite,null,2)
    return fs.writeFile(file,JsonWrite,() => '')
}
function DataNumber(min,max){
    let random = Math.round(Math.random() * (min + max) - min)
    if (random < min) random = min 
    return random
}
async function DataUser(nome,idade,profissão){
    const ObjectUser = {nome,idade,profissão}
    const result = DataNumber(0,2)
    
    console.log(result)
    if (result === 2) {
        const DataPost = await WriteFile('./user.json',ObjectUser)
        return DataPost
    }
    else{return `Response Error`}
}
DataUser('Alvaro',18,'Desenvolvedor').then(response => console.log(response))
.catch(error => console.log(error))