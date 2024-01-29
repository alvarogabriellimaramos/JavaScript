
const Model = require('../services/model/index');

const validator = require('validator');

const jwt = require('jsonwebtoken');

const { HashPassword, VerifyPasswordHash, CreateToken, CreateUser } = require('../mods/index');

const TransportEmail = require('../services/email/index.js');

require('dotenv').config();

const SECRET = process.env.SECRET;

const Conectados = []
// muda essa função para fazer algo útil 
const GetUsers = async (request, response) => {
    try {
        return response.status(200).json(request.user);
    }
    catch (e) {
        console.log(e)

        return response.status(500).json({ messagem: 'Erro no servidor,tente novamente mais tarde' });
    }
}

const SendEmail = async (request, response) => {
    try {
        const { username, email, password, confirmPassword } = request.body;

        if (!username) return response.status(400).json({ messagem: 'Por favor,preencha o nome de usuario corretamente' });

        if (!email || !validator.default.isEmail(email)) return response.status(400).json({ messagem: 'Por favor,preencha o email corretamente' });

        if (!password || password.length < 8) return response.status(400).json({ messagem: "Sua senha precisa ter no minimo 8 caracteres" });

        if (password !== confirmPassword) return response.status(400).json({ messagem: 'Suas senhas não batem' });

        const UserEmailExists = await Model.findOne({ email: email });

        const UserUsernameExists = await Model.findOne({ username: username });

        if (UserEmailExists || UserUsernameExists) return response.status(409).json({ messagem: 'Email ou Username já cadastrado no sistema' });

        const user = { username, email, password }

        const token = await CreateToken(user, SECRET);

        const Email = await TransportEmail(email, username, token, 'autenticação');

        return response.status(200).json(Email);
    }
    catch (e) {
        console.log(e);

        return response.status(500).json({ messagem: 'Erro no servidor,tente novamente mais tarde' });
    };
};
const LoginUser = async (request, response) => {
    const { password, email } = request.body;

    const UserEmail = await Model.findOne({ email: email });

    if (UserEmail === null) return response.status(400).json({ messagem: 'Email ou senha incorretos' });

    VerifyPasswordHash(password, UserEmail.password).then(result => {
        if (UserEmail && result) {
            const token = jwt.sign
                ({ id: UserEmail._id, username: UserEmail.username }, SECRET, { expiresIn: '2h' });

            return response.status(200).json({ messagem: token });
        }
    })
        .catch(e => response.json(e));
}
const ValidationToken = (request, response, next) => {
    const tokenHeader = request.header('Authorization');

    if (!tokenHeader) return response.status(403).json({ messagem: 'Acesso Negado' });

    jwt.verify(tokenHeader, SECRET, (err, user) => {

        if (err) return response.status(403).json({ messagem: 'Token Invalido' });

        request.user = user;

        next();
    })
    // parei na parte de validação do token e parei na aula 57:18
};
// muda a função validationTokenLogin e utiliza-la para valida os token de registro e de login 

const createUser = async (request, response) => {
    try {
        const { username, email, password } = request.user;

        const PasswordHash = await HashPassword(password);

        const UserUsernameExists = await Model.findOne({ username: username });

        if (UserUsernameExists !== null) return response.status(400).json({ messagem: 'Esse usuario já existe' });

        await CreateUser(username, email, PasswordHash);

        return response.status(201).json({ messagem: 'Usuario criado com sucesso' });
    }
    catch (e) {
        return response.status(400).json({ messagem: 'Erro no servidor,tente novamente mais tarde' });
    }
}

const VerifyConnect = (request, response) => {
    const { username } = request.body
    if (Conectados.indexOf(username) !== -1) return response.json({ messagem: "Usuario já conectado" });

    Conectados.push(username);
    console.log(Conectados);

    return response.status(200).json(Conectados);
};
const Desconnect = (request, response) => {
    const { username } = request.body;
    const index = Conectados.indexOf(username);
    if (index === -1) return response.status(401).json({ messagem: 'Erro ao encontra usuario' })
    if (username === Conectados[index]) {
        Conectados.splice(index, 1);
        return response.status(200).json({ messagem: 'Usuario Desconectado' });
    };
};
const TokenRecover = async (request, response) => {
    try {
        const { email, username } = request.body;

        const UserEmail = await Model.findOne({ email: email });

        if (UserEmail === null) return response.status(404).json({ messagem: 'Esse Usuario não existe' });

        if (email === UserEmail.email && username !== UserEmail.username) return response.status(404).json({ messagem: 'Nome de usuario ou email estão incorretos' });

        const token = await CreateToken(request.body, SECRET);

        const Email = await TransportEmail(email, username, token, 'redefinição');

        return response.status(200).json(Email);
    }
    catch (e) {
        console.log(e)
        return response.status(400).json({ messagem: 'Erro no servidor,tente novamente mais tarde ' })
    }
}
const verifyPassword = (req,res,next) => {
    const {pass,confirmpass} = req.body;

    if (!pass || pass.length < 8) return res.json({messagem: 'sua senha precisa ter no minimo oito caracteres'});
    
    if (pass !== confirmpass) return res.json({messagem: 'Suas senha não batem'});
    next();
}
const RecoverPassword = async (request,response) => {
    try {
        const {email} = request.user;

        const {pass} = request.body;

        const UserEmail = await Model.findOne({ email: email });

        const Hash = await HashPassword(pass);

        UserEmail.password = Hash;

        await UserEmail.save();

        return response.status(200).json({messagem: 'Sua senha foi alterada'});
    }
    catch(e) {
        console.log(e);
        return response.status(400).json({messagem: 'Erro no servidor,tente novamente mais tarde'});
    }
}
module.exports = {
    GetUsers,
    SendEmail,
    LoginUser,
    ValidationToken,
    createUser,
    VerifyConnect,
    Desconnect,
    TokenRecover,
    verifyPassword,
    RecoverPassword
};
