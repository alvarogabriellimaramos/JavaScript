// o Modulo http é um modulo responsavel por fazer permissões de conexões e envia dados para as conexões recbidas,por exemplo digamos que vamos acessar um site,o modulo http será responsável por envia todo o conteudo do site para o nosso navegador para que possamos visualizar, o prontocolo http é responsável por criar a conexão entre cliente e servidor 

// em resumo o http é o prontocolo que permitir que o cliente se conecte com o servidor 

// importando o modulo http,como o modulo http é um modulo core,ou seja já vem junto com o node não precisamos especificar o diretorio do modulo 

var http = require('http')

/*Como o modulo funciona*/
// Crianção de servidor.A principal função do modulo http é criar um servidor http,para isso utilizamos o método http.createServer(),esse método recebe uma função callback,essa função callback carrega o nome de requestListener,essa função é chamada para cada requisição feita ao servidor 



// callback requestListener 
const requestListener = (request,response) => {
    // quando a função requestListener é chamada ela recebe dois objetos como argumento,o request e o response

    // o request contem dados sobre a requisição do usuario,como corpo da requisição,método http,a url e etc..
    console.log(request.method) // irá mostra o método da requisição do cliente,se é post,get e etc...
    console.log(request.url) // irá mostra a url utilizada

    // o método response contém métodos utilizados para envia dados de voltar para o cliente
    response.writeHead(200) // Define o código de status da resposta do nosso servidor, os codigos de status indica o qual bem uma solicitação foi processada,nesse caso o código 200 corresponde a ok
    response.write('<h1>Bem vindo</h1>')
    response.end() // o método end server para finalizar a resposta no servidor,indicado que não a nada mais a server enviado
}
 // criando o servidor

http.createServer(requestListener).listen(8080,() => console.log('Servidor rodando na porta 8080')) // o método listen server para fazer com que o servidor fique escutando solicitações de requisições,ele aceita um valor numerico como argumento que é a porta que será utilizada e um callback callback que pode ser utilizado para mostra algumas mensagem simples como essa acima
// o recomendado é sempre trabalha com numeros alto de porta,isso por que pode haver casos que outros sites já esteja utilizado essa porta 