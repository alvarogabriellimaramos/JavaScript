const Table = require('../DB/MODELS/index');
const ReadFile = require('../READ/read');

async function AddLangs(){
    try {
        const data = JSON.parse(await ReadFile('../JSON/index.json'));
        const TABLE = await Table();
        for (let object of data) {
            await TABLE.create({
                name: object['nome'],
                descrição: object['Descrição'],
                criadores: object['Criador'],
                extensão: object['Extensão'],
                imagem: object['img']
            });
        };
        return TABLE;
    }
    catch(err) { return { messagem: 'Erro ao adicionar linguagens no banco de dados ' + err} }
}

module.exports = AddLangs;