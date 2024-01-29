const DataBase = require('../database');
async function Table() {
    try {
        const sequelize = require('sequelize');
        const DB = DataBase();
        const Table = await DB.define('Usuarios',{
            username: {type: sequelize.STRING},
            email: {type:sequelize.STRING},
            password: {type: sequelize.STRING}
        });
        return Table;
    }
    catch (error) {return {messagem: ' Erro ao sincroniza tabela ',erro:error}}
};
module.exports = Table;