const Model = require('../database/model/model');
const {
    UpdateNameTask,
    UpdateDescription,
    UpdateDone
} = require("./update/update");
const Delete = require("./delete/delete");
const GetAll = async (request,response) => {
    try {
        const data = await Model.find();
        return response.status(200).json(data);
    }
    catch (e) {
        return response.status(401).json({
            messagem: 'Erro ao fazer requisição',
            erro:e.message
        });
    };
};
const AddTask = async (request,response) => {
    try {
        if (request.body.task.length < 4) {
            return response.status(404).json({messagem: 'Erro ao criar tarefa',
        erro: 'Min length 4'});
        }
        await Model.create(request.body);
        return response.status(201).json({messagem: 'Tarefa criada com sucesso'});
    }
    catch (e) {
        return response.status(400).json({
            messagem: 'Erro ao cadastra nova tarefa',
            erro:e
        });
    };
};

const UpdateTask = async (request,response) => {
    try {
        const {id,task,description} = request.body;
        await UpdateNameTask(id,task);
        await UpdateDone(id);
        const ReturnTask = await UpdateDescription(id,description);
        return response.status(200).json(ReturnTask);
    }
    catch (e) {
        return response.status(404).json({messagem: 'Erro ao atualiza task',erro:e});
    };
};
const DeleteTask = async (request,response) => {
    try {
        const data = await Delete(request.body.id);
        return response.status(204);
    }
    catch(e) {
        return response.status(404).json({
            messagem: 'Erro ao deletar task',
            erro:e
        });
    };
};
module.exports = {
    GetAll,
    AddTask,
    UpdateTask,
    DeleteTask
}