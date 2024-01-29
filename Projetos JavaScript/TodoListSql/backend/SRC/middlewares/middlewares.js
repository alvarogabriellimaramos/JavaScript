const Table = require('../database/models/model');
const {UpdateTask,DeleteTask} = require('../module/updateTask');
async function TasksAll (request,response,next) {
    response.header('Access-Control-Allow-Origin', '*');
    const TABLE = await Table();
    const ListTasks = await TABLE.findAll();
    return response.status(200).json(ListTasks);
}
async function AddTask (request,response,next) {
    try {
        const TABLE = await Table();
        const {task,descrição} = request.body
        if (task === '' || task === undefined) {
            return response.status(404).json({messagem: 'Erro ao adiciona Task'})
        }
        await TABLE.create({
            task: task,
            descrição: descrição,
            concluida: false
        })
        return response.json({messagem: 'Task adicionada com sucesso'})
    }
    catch (erro) {return response.json({messagem: "Erro ao adiciona Task",error:erro})}
}
async function UpdateTasks (request,response,next) {
    try {
        const task = await UpdateTask(request.params.id,request.body.descrição)
        return response.status(200).send(task)
    }
    catch (error) {return response.status(404).json({messagem: 'Erro ao tenta encontra task ',erro:error})}
}
async function DeleteTasks (request,response,next) {
    try {
        return response.status(200).send(await DeleteTask(request.params.id));
    }
    catch (erro) {return response.status(404).json({messagem: 'Erro ao deletar task'})}
}
module.exports = {
    TasksAll,
    AddTask,
    UpdateTasks,
    DeleteTasks
};