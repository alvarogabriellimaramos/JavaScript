const Table = require('../DB/MODELS/index');
async function GetResponse (request,response) { 
    try {
        response.set("Access-Control-Allow-Origin",'*');
        const data = await Table();
        const ListLangs = await data.findAll();
        response.status(200).json(ListLangs);
    }
    catch(err) {
        return response.status(404).json({messagem: 'Erro ao tenta envia JSON para rota get ' + err})
    }
}

module.exports = GetResponse;