const router = require("express").Router();

const {
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
} = require('../controllers/index');

router.get('/users',ValidationToken,GetUsers);

router.put('/recover',ValidationToken,verifyPassword,RecoverPassword);

router.post('/verify',VerifyConnect);

router.post("/sendemail",SendEmail);

router.post('/register',ValidationToken,createUser);

router.post('/login',LoginUser);

router.post('/tokenrecover',TokenRecover);

router.delete('/desconnect',Desconnect);

module.exports = router;