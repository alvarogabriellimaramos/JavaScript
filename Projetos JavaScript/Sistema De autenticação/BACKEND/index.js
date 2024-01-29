const app = require("express")();
const body = require("body-parser");
const TABLE = require('./db/table/table.js')
const CreateUsername = require('./module/username.js');
app.use(body.urlencoded({extended:true}));
app.post("/form",async (request,response) => {
    response.send(await CreateUsername(request.body.username,request.body.email,request.body.password))
});
app.get('/users',async (request,response) => {
    try{
        response.set('Access-Control-Allow-Origin','*');
        const table = await TABLE();
        const ListUsers = await table.findAll();
        response.json(ListUsers);
    }
    catch(erro){response.json('Erro: ' + erro)};
})
app.listen(8080,() => console.log("O servidor esta rodando na porta 8080"));