const Sequelize = require('sequelize');
const ConnectionDB = () => {
    try {
        const DataBase = new Sequelize('todolist','root','erineide',{
            host: 'localhost',
            dialect: 'mysql'
        });
        return DataBase;
    }
    catch(e){return {messagem: 'Erro ao se conecta ao banco de dados ' + e}}
};

module.exports = ConnectionDB;