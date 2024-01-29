const express = require('express');

const app = express();

const UsersModel = require('./model/usernames');

const PORT = 8080;
const cors = require('cors');

const ConnectDb = require('./database/index');
app.use(cors())
app.use(express.urlencoded({extended:true})); // esse middleware server para lida com dados de formularios mais facilmente

const router = express.Router();
(async () => {
    const data = await ConnectDb(); 
    console.log(data);
})()
router.get('/',async (request,response,next) => {
    const data = await UsersModel.find(); // o find é utilizado para recupera todos os dados dentro de uma collection 
    return response.status(200).json(data);
})

router.post('/add',async (request,response,next) => {
    try {
        
         await UsersModel.create({
            name: request.body.name,
            email: request.body.email
         })// o create server para criar um novo documento na collection,as suas propriedades devem ser passada em ordem,na mesma ordem que está a collection no arquivo username.js
        return response.status(201).json({messagem: 'Usuario cadastrado com sucesso'})
    }
    catch (e) {
        return response.status(500).json({
            messagem: 'Erro ao tenta cadastra usuario',
            erro:e.message
        });
    };
});

app.use(router);

app.listen(PORT,() => console.log(`Servidor está rodando na porta ${PORT}`));