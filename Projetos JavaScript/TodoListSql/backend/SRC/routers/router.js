const app = require("express").Router();
const {TasksAll,AddTask,UpdateTasks,DeleteTasks} = require('../middlewares/middlewares');
app.get('/tasks',TasksAll);
app.post('/add',AddTask);
app.post('/:id/update',UpdateTasks);
app.post('/:id/delete',DeleteTasks)
module.exports = app;