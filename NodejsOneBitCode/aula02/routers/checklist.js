const express = require('express');
const router = express.Router();
// O Express.Router server para deixa nossas rotas mais organizadas e mais legiveis de serem lidas,geralemente quando estamos utilizado o express.Router() nos concetramos as rotas em um unico arquivo e o utilizamos no arquivo principal,usando o app.use()

router.get('/get',(request,response,next) => {
    console.log('Rota do tipo get');
    response.send();
})

router.post('/post',(request,response,next) => {
    console.log(request.body) // o request.body server para ter acesso a todo o corpo da requisição enviada pelo front-end
    response.status(200).send(request.body)
})

router.put('/put/:id',(request,response,next) => {
    response.send(`PUT ID: ${request.params.id}`)
})
router.delete('/delete/:id',(request,response,next) => {
    response.send(`DELETE ID: ${request.params.id}`)
})

module.exports = router