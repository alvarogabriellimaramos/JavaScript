const app = require('express')();

const GetResponse = require('./MIDDLEWARE/index');
const PORT = 8080;

app.get('/langs',GetResponse);

app.listen(PORT,() => console.log(`Servidor rodando na porta ${PORT}`));