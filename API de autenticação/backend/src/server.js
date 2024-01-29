const express = require("express");

const cors = require('cors');

require("dotenv").config();

require('./services/database/index');

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./routers/index'));

const PORT = process.env.PORT || 8081;

console.log(PORT);

app.listen(PORT,() => console.log(`SERVER RUNNING ${PORT}`));

