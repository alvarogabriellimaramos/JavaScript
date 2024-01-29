const express = require('express');
const app = express();
const router = require('./routers/checklist');
require('./db/index');

app.use('/todolist',router); // agora podemos acessa as rotas definida pela variavel router,utilizado o /api,lembrando que isso é apenas um exemplo e pode ser expadido de uma melhor forma
app.listen(8080,() => console.log('Servidor rodando na porta ' + 8080));
