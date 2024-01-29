const {GetAll,AddTask,UpdateTask,DeleteTask} = require('../controllers/index');

const router = require('express').Router();

router.get('/tasks',GetAll);

router.post('/add',AddTask);

router.put('/update',UpdateTask);

router.delete('/delete',DeleteTask);

module.exports = router;