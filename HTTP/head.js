const http = require("http")

http.createServer((request,response) => {
    // o utilizando o método request.setHeader() para seta o cabeçalho do nosso servidor,permitido assim o acesso aos recursos 
    request.setHeader('Access-Control-Allow-Origin', '*') // o astesristico diz para o servidor que qualquer dominio é permitido para acessa nosso recuros
    request.setHeader('Access-Control-Allow-Origin','http://www.exemplo.com/') // aqui indica que apenas o dominio especificado poderá acessa o recurso do nosso servidor 
}).listen(8080,() => console.log("Servidor rodando na porta 8080 "))

// resposta opaca,a a resposta opaca é utilizada pelo cors,para envia uma resposta ao navegador dizendo que o usuario conseguir acessa o servidor,mas não podera acessa as informações enviada pelo servidor,a resposta pode ser opaca se o servidor não permitir a origem da requisição...
// exemplo para recebe apenas a resposta opaca,se o cabeçalho acess-control não estiver configurado corretamente 
fetch('http://www.exemplo.com/',{mode:'no-cors'}).then(res => res.json().then(res => console.log(res))
)

// A resposta opaca é uma medida de segurança que protege contra vazamento de informações sensíveis, mas pode exigir configuração específica no lado do servidor para permitir que o código do cliente acesse o conteúdo da resposta.