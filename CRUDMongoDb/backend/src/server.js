const express = require('express');
const cors = require('cors');
const ConnectDb = require('./database/index');

const router = require('./routers/router');

const app = express();



app.use(express.json());

// ConnectDb 
ConnectDb().then(response => console.log(response))
.catch(erro => console.log(erro));
app.use(cors());
app.use('/',router);

const PORT = 8080 || 8081;

app.listen(PORT,() => console.log(`Server running ${PORT}`));