const DataBase = require('../db');

const ConfigTable = async () => {
    try {
        const Sequelize = require('sequelize');
        const DB = DataBase();
        const Table = await DB.define('TODOLIST',{
            task: Sequelize.STRING,
            descrição: Sequelize.TEXT,
            concluida: Sequelize.BOOLEAN
        });
        return Table;
    }
    catch (e) {return { messagem: 'Erro ao sincroniza tabela ' + e}}
}

module.exports = ConfigTable;