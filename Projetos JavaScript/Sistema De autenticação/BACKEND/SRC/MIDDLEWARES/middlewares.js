const Table = require('../DB/MODEL/model');
const ValidateUsername = require('../MODULE/username');
async function UsersAll (request,response,next) {
    try {
        const TABLE = await Table();
        const ListsUsers = await TABLE.findAll();
        if (ListsUsers.length === 0) return response.status(404).json({messagem: 'O banco de dados está vazio'});
        return response.status(200).json(ListsUsers);
    }
    catch (error) {
        return response.status(404).json({
            messagem: 'Erro ao tenta retorna todos os usuarios',
            erro:error
        });
    };
};
async function AddUser (request,response,next) {
    try {
        const {username,email,password} = request.body;
        const users = await ValidateUsername(username,email,password);
        response.status(200).json(users);
    }
    catch (err) {
        return response.status(404).json({
            messagem: 'Erro ao tenta adiciona usuario',
            erro:err
        });
    };
};
module.exports = {
    UsersAll,
    AddUser
}