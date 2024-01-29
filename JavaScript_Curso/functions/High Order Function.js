// High Order Function (Funções de ordem superior) são funções que são utilizada como retorno de outras funções ou passadas como argumentos para outras funções,isso deixa o código mais flexivel e mais rápido 
/*function ObjectFunction(nome,idade,profissão,callback){
    const Person = { nome,idade,profissão }
    return callback(Person)
}
function FunctionPrint(arg){
    console.log(arg)
}*/
// ObjectFunction('Alvaro',18,'Programador',FunctionPrint)
const rl = require("readline")
const fs = require('fs').promises
const terminal = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
function WriteFile(file,write){
    const ListWrite = [write]
    const JsonWrite = JSON.stringify(ListWrite,null,2)
    return fs.writeFile(file,JsonWrite,() => '')
}
let ListPassword = []
async function OperationUser(nome,callback){
    ListPassword.push({nome})
    terminal.question('Digite sua senha - ',password => {
        terminal.question('Digite sua senha novamente - ',password2 => {

            ListPassword.push(password)

            ListPassword.push(password2)

            if (password === password2) callback('./contatos.json',ListPassword)
            terminal.close()
        })
    })
}

async function StartAsync(nome,callback){
    const Data = await OperationUser(nome,callback)
    return Data
}
StartAsync('Alvaro',WriteFile)