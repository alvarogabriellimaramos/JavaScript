const rl = require('readline')
const {writeFile,TaskCreate,AddTask,ListTask,TaskComplete,DeleteTask} = require('./metodos')
const terminal = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
const Option = async option => {
    switch(option){
        case '1': {
            terminal.question('Digite o nome da task - ',nome => {
                terminal.question('Digite uma descrição ( opcional ) - ',async descrição => {
                    const NewTask = TaskCreate(nome,descrição)
                    console.log(await AddTask(NewTask,writeFile))
                    Main()
                })
            })
            break
        }
        case '2':{
            const data = await ListTask()
            console.log(data)
            Main()
            break
        }
        case '3':{
            terminal.question('Digite o nome da task que deseja concluir - ',async nome => {
                console.log(await TaskComplete(nome,writeFile))
                Main()
            })
            break
        }
        case '4':{
            terminal.question('Digite o nome da task que deseja deletar - ',async nome => {
                console.log(await DeleteTask(nome,writeFile))
                Main()
            })
            break
        }
        case '5': {
            terminal.close()
            console.log('Programa encerrado')
            break
        }
        default:{
            console.log('Opção Invalida')
            Main()
        }
    }
}
const Main = () => {
    console.log(
    `
 1 - Adicionar Tarefa 
 2 - Lista Tarefas 
 3 - Concluir Tarefa 
 4 - Excluir Tarefa
 5 - Sair do programa`
    )
    terminal.question('Digite uma opção - ',async option => {
        await Option(option)
    })
}
Main()