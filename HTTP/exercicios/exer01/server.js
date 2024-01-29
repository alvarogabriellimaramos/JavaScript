const server = require('http')
const PORT = 8080
server.createServer((request,response) => {
    console.log(request.method)
    response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    response.write('Requisição feita com sucesso')
    response.end()
}).listen(PORT,() => console.log('Servidor rodando na porta ' + PORT))