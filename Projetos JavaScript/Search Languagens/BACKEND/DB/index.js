const sequelize = require('sequelize');

function ConnectDb(){
    try{
        const DataBase = new sequelize('search','root','erineide',{
            host: 'localhost',
            dialect: 'mysql'
        });
        return DataBase;
    }
    catch(erro){ return { messagem: 'Erro ao se conectar com o banco de dados ' + erro } };
};

module.exports = ConnectDb