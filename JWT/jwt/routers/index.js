const router = require('express').Router();
const {VerifyJWT,GetData,Post} = require('../controllers/index');
router.get('/',VerifyJWT,GetData);
router.post('/login',Post);
module.exports = router;