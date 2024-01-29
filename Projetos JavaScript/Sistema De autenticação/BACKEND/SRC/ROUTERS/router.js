const router = require('express').Router();
const {UsersAll,AddUser} = require("../MIDDLEWARES/middlewares");
router.get('/users',UsersAll);
router.post('/add',AddUser);
module.exports = router;