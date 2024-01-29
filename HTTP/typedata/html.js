const http = require("http");

const PORT = 8080
// objeto simples 
const Data = [
    {nome: 'Alvaro',idade:18},
    {nome: 'Pedro',idade:13}
]
function requestListener (req,res) {
    // para retorna dados json,teremos que configura o cabaçalho utilizando o contentType,para indica que estamos enviando dados de um tipo especifico,nesse cadso JSON 
    res.writeHead(200,{'Content-Type': 'application/json'})

    // Dados em formatos Json
    const DataJson = JSON.stringify(Data,null,2)
    res.end(DataJson)
}
http.createServer(requestListener).listen(PORT,() => console.log('Escutando na porta ' + PORT))