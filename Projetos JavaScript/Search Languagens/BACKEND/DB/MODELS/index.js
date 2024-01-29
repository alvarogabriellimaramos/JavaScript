const DataBase = require('../index');
const sequelize = require('sequelize');
const ConfigModel = async () => {
    try {
        const DB = DataBase();
        const Search = await DB.define('Languagens',{
            name: { type: sequelize.STRING },
            descrição: {type: sequelize.TEXT},
            criadores: {type: sequelize.STRING},
            extensão: {type:sequelize.STRING},
            imagem: {type: sequelize.STRING}
        });
        return Search;
    }
    catch(erro) {return { messagem: 'Erro ao configura tabela ' + erro}};
};

module.exports = ConfigModel;