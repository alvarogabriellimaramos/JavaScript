const express = require('express');
const router = require('./ROUTERS/router');
const app = express();

app.use(express.json());
app.use((request,response,next) => {
    response.header('Access-Control-Allow-Origin', '*'); // ou coloque a origem específica que você deseja permitir
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
app.use('/api',router);
const PORT = 8080;

app.listen(PORT,() => console.log(`Server Running ${PORT}`));