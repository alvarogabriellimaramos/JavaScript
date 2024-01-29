const mongoose = require('mongoose');
require("dotenv").config();
const USER = process.env.USER;
const PASS = process.env.PASS;

mongoose.connect(`mongodb+srv://${USER}:${PASS}@teste.q0unlks.mongodb.net/`).then(() => console.log('Connectado com sucesso ao db'))
.catch(e => console.log(e));

module.exports = mongoose;