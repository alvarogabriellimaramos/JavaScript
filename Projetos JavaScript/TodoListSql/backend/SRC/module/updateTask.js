const Table = require('../database/models/model');
async function UpdateTask (id,newDescription) {
    const TABLE = await Table();
    const Task = await TABLE.findOne({
        where: {id: id}
    });
    if (Task) {
        Task.descrição = newDescription;
        await Task.save();
        return Task;
    }
    else { return { messagem: 'Erro ao tenta encontra task' }}
};
async function DeleteTask (id) {
    const TABLE = await Table();
    const Task = await TABLE.destroy({
        where: {id:id}
    })
    if (Task === 1) return {messagem: 'Task excluida com sucesso'}
    else{return {messagem: 'Erro ao tenta excluir Task'}};
}
module.exports = {
    UpdateTask,
    DeleteTask
}