const validator = require('validator');
const Table = require('../DB/MODEL/model');
async function Boolean (username,email) {
    const TABLE = await Table();
    const Username = await TABLE.findOne({
        where: {username: username}
    });
    const Email = await TABLE.findOne({
        where: {email:email}
    });
    return [Username,Email];
}

async function ValidateUsername (username,email,password) {
    try {
        const TABLE = await Table();
        const Booleans = await Boolean(username,email);
        if (Booleans[0] !== null || username.length === '') return { messagem: 'Esse usuario já existe ou é invalido' };
        if (Booleans[1] !== null || username.length === '') return {messagem: 'Esse email já existe ou é invalido'};
        if (!validator.default.isEmail(email)) return {messagem: 'Email invalido tente outro'};
        await TABLE.create({
            username,
            email,
            password
        })
        return { messagem: 'Usuario criado com sucesso' }
    }
    catch (erro) {
        return {messagem: 'Erro ao validar usuario ' + erro}
    }
}
module.exports = ValidateUsername;