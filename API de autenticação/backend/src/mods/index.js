const bc = require('bcrypt');
const jwt = require('jsonwebtoken');
const Model = require('../services/model/index');
function HashPassword(password) {
  return new Promise((resolve,reject) => {
        bc.hash(password,10,(err,hash) => {
            if (err) reject('Erro');
            resolve(hash);
        });
    });
};
async function CreateUser (username,email,password) {
    try {
        await Model.create({username,email,password});
        return {messagem:'Usuario criado com sucesso'};
    }
    catch(e) {
        console.log(e)
        return {
            messagem: 'Erro ao tenta criar usuario'
        };
    };
};
function VerifyPasswordHash (passwordUser,passwordDb) {
    return new Promise((resolve,reject) => {
        bc.compare(passwordUser,passwordDb,(err,result) => {
            if (err) reject('Erro');
            if (result) resolve(result)
            else { reject({messagem: 'Senha incorreta'}) }
        });
    });
}
function CreateToken (user,secret) {
    return new Promise((resolve,reject) => {
        const token = jwt.sign({username:user.username,email:user.email,password:user.password},secret,{expiresIn: '1h'}); 
        resolve(token);
    })
}
module.exports = {
    HashPassword,
    VerifyPasswordHash,
    CreateToken,
    CreateUser
};