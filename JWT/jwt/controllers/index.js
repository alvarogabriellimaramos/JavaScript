const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET;
const VerifyJWT = (request,response,next) => {
    const token = request.header('Authorization');
    if (!token) return response.status(401).json({messagem: 'Acesso negado'});
    // esse if será executado se o token estiver vazio
    jwt.verify(token,SECRET,(err,user) => {
        if (err) return response.status(403).json({messagem: 'Token Invalído',err});
        next();
    });
    // o jwt.verify server para verifica se o token digitado no header Authorization é valido
};
const GetData = (request,response) => {
    const data = [
        {
            nome: 'Alvaro',
            idade: 18,
            profissão: 'Programador'
        },
        {
            nome: 'Pedro',
            idade: 19,
            profissão: 'Engenheiro'
        }
    ];
    return response.status(200).json(data);
}
const Post = (request,response) => {
    const token = jwt.sign({id:1,user:'alvinho'},SECRET,{expiresIn: '1h'});
    return response.status(200).send(token);
};
module.exports = {
    VerifyJWT,
    GetData,
    Post
};