const express = require('express');
const app = express();
const router = require('./routers/router');
const PORT = 8080;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // ou coloque a origem específica que você deseja permitir
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use('/todolist',router);
app.listen(PORT,() => console.log('Server running ' + PORT));