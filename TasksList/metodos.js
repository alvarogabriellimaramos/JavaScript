// Claro, aqui está um projeto simples utilizando Promessas em JavaScript. O projeto consistirá em criar uma aplicação de lista de tarefas (to-do list) onde você poderá adicionar e exibir tarefas de forma assíncrona, simulando operações de I/O, como leitura e gravação de dados.

const fs = require('fs').promises
const Tasks = []
const NamesTask = []

// Callback Option 
const Option = () => console.log('A callback não foi fornecida')

// Write File 
const writeFile = async write => {
    try{
        const JsonWrite = JSON.stringify(write,null,2)
        await fs.writeFile('./tarefas.json',JsonWrite)
        return `\n\nGravação concluida com sucesso\n\n`
    }
    catch(e){
        return `\n\nERRO:Erro ao concluir gravação de arquivo ${e}\n\n`
    }
}
// createTask 
const TaskCreate = (nome,descrição) => {
    return {
        nome,
        'Data de crianção':new Date().toLocaleString(),
        descrição,
        concluida: false
    }
}

const AddTask = async (task,callback = Option()) => {
    try{
        if (task.nome === '' || task.nome === undefined) return `\n\nERRO: Task sem nome\n\n`
        else{
            if (NamesTask.indexOf(task.nome) === -1) {

                NamesTask.push(task.nome)

                Tasks.push(task)

                await callback(Tasks)

                return `\n\nTarefa adicionada com sucesso\n\n`
            }

            else{return `Tarefa já adicionada`}
        }
    }
    catch{return `\n\nERRO:Erro ao adiciona tarefa\n\n`}
}

// List Task 
const ListTask = async () => {
    try{
        const FileData = await fs.readFile('./tarefas.json','utf-8')
        const data = JSON.parse(FileData)
        return data
    }
    catch(e){return `\n\nERRO:Erro ao concluir listagem \n\n`}
}
// Task Complete
const TaskComplete = async (nome,callback = Option()) => {
    
    try{
        if (NamesTask.indexOf(nome) !== -1){
            Tasks.forEach(task => {
                if (task.nome === nome) task.concluida = true
            })
            await callback(Tasks)
            return `\n\nTask concluida com sucesso\n\n`
        }
        else{return `\n\nERRO:Task não encontrada\n\n`}
    }
    catch{return `\n\nERRO:Erro ao completa task\n\n`}
}
// Delete Task
const DeleteTask = async (nome,callback = Option()) => {
    try{
       const Index = NamesTask.indexOf(nome)
       if (Index !== -1){
        Tasks.forEach(task => {
            if (task.nome === nome) {
                Tasks.splice(Index,1)
                NamesTask.splice(Index,1)
            }
        })
            await callback(Tasks)
            return `\n\nTask deletada com sucesso\n\n`
       }
       else{return `\n\nERRO:Task não encontrada \n\n`}
    }
    catch{return `\n\nERRO:Erro ao excluir task\n\n`}
}

module.exports = {
    writeFile,
    TaskCreate,
    AddTask,
    ListTask,
    TaskComplete,
    DeleteTask
}