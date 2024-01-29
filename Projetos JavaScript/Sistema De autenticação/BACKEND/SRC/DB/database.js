const sequelize = require('sequelize');
function DataBase () {
    try {
        const DB = new sequelize('sistema','root','erineide',{
            host: 'localhost',
            dialect: 'mysql'
        });
        return DB;
    }
    catch(error) {return {messagem: 'Erro ao se conecta com o banco de dados ',erro: error}}
};

module.exports = DataBase;