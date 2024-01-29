const mongoose = require("mongoose");
const PASSWORD = 'YBDj2thgahx8h4zq';
const ConnectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://alvarogabriel336:${PASSWORD}@teste.q0unlks.mongodb.net/`);
        return `Conectado ao banco de dados com sucesso`;
    }
    catch (e) {
        return {
            messagem: 'Erro ao se conecta com o banco de dados',
            erro: e.message
        };
    };
};

module.exports = ConnectDb;