const router = require("express").Router();

const {
    GetUsers,
    SendEmail,
    LoginUser,
    ValidationTokenLogin,
    ValidationTokenRegister,
    createUser,
    VerifyConnect,
    Desconnect,
    TokenRecover,
    RecoverPassword
} = require('../controllers/index');

router.get('/users',ValidationTokenLogin,GetUsers);

router.post('/verify',VerifyConnect);

router.post("/register",SendEmail);

router.post('/token',ValidationTokenRegister,createUser);

router.post('/login',LoginUser);

router.post('/tokenrecover',TokenRecover);

router.put('/recover',RecoverPassword);

router.delete('/desconnect',Desconnect);

module.exports = router;