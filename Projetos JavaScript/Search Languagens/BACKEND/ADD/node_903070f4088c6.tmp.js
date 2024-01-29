const Table = require('../DB/MODELS/index');
const ReadFile = require('../READ/read');

async function AddLangs(){
    try {
        const data = await ReadFile('../JSON/index.json');
        const TABLE = await Table();
        for (let object of data) {
            await TABLE.create({
                name: object['name'],
                'criada em': object ['ano em que foi criada'],
                descrição: object.Descrição,
                criadores: object.Criador,
                extensão: object.Extensão,
                imagem: object.img
            });
        };
    }
    catch(err) { return { messagem: 'Erro ao adicionar linguagens no banco de dados ' + err} }
}

AddLangs().then(res => console.log(res))
.catch(e => console.log(e))
module.exports = AddLangs;