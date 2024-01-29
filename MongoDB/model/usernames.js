const mongoose = require('mongoose');

// para criar uma nova colection utiliamos a propriedade schema do mongoose,criando uma nova instancia e passado as propriedades especifcas dessa nova collection 

const UserSchema = new mongoose.Schema({
    name: {
        type: String, // o type irá dizer qual será o tipo de dado que o campo vai receber
        require: true, // o require irá dizer que o campo é obrigatório e dever ser preenchido
        unique: true
    },
    email: {
        type: String,
        unique: true, // essa propriedade server para dizer que os valores desse campo dever ser único
        require: true,
        lowercase: true  // server para coloca todas as strings nesse campo como minusculas
    }
})

module.exports = mongoose.model('Usuarios',UserSchema); // o mongoose.model irá criar no nosso banco de dados a nossa coleção usuarios,essa função recebe geralmente dois parametros,o nome da collection e as configurações da collection