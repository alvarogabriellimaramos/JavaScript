const express = require('express');

const router = require('./routers/index');

const app = express();

const PORT = 8080;

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log('Server Running ' + PORT));