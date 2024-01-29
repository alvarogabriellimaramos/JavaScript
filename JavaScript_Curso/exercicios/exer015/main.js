const rl = require('readline')
const util = require('util')
const {User,ReturnFunction} = require('./module/AsyncModule.js')

const terminal = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
const AsyncTerminal = util.promisify(terminal.question).bind(terminal)
async function DataUser(){
    try{
        const nome = await AsyncTerminal('Digite seu nome - ')
        const idade = await AsyncTerminal('Digite sua idade - ')
        const profissão = await AsyncTerminal('Digite sua profissão - ')
        const id = await AsyncTerminal('Digite seu id - ')
        terminal.close()
        const user = User(nome,idade,profissão,id)
        ReturnFunction(user)
    }
    catch{
        return `Erro ao salva informações`
    }
}
DataUser()