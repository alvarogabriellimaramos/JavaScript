// o socket é uma biblioteca javascript que érmitie a comunicação em tempo real entre o cliente (navegadores geralemnte ) e servidores,essa biblioteca é geralmente utilizada em chats online,jogos online ou em aplicações que exigem comunicação instatanea entre o cliente e o servidor

// o socket.io utiliza a comunicação websocket,por sua vez a comunicação websocket utiliza o protocolo TCP para manter uma conexão segura e confiavel

// Evento e emissões: um evento no websocket pode ser um envio de mensagem no chat ate um movimento ou atualização em algum jogo online

// Conexão bidirecional: amobos os lados,cliente e servidor pode envia eventos um ao outro,permitindo assim uma conexão em tempo real,fazendo assim com que qualquer evento eviando de ambos os lados passe a ser refletido tanto no cliente quanto no servidor


// exemplo 
const { WebSocketServer} = require('ws'); // o webSocketServer é uma class então precisamos instacia-la
const wss = new WebSocketServer({port:8080}); // pasamos um objeto que vai ser a porta que nosso servidor irá se conectar

// evento de conexão,utilizando o método que server para eventos no websocket,o método on geramelente recebe dois parametros,o evento em si e uma callback que irá fica resposável pela nossa logica
wss.on('connection',ws => {
    // na nossa função callback recebemos um ws,que basicamente é um cliente que está se conectado ao nosso servidor,ou seja quando algume se conecta ao nosso servidor,o nosso evento connection será executado
    // caso tenhamos algum erro de conexxão podemos utiliza o seguinte método 
    ws.on('error',console.error) // para caso tenhamos algum erro de conexão de usuario

    // temos um evento que sempre irá ser disparado quando alguem envia uma mensagem para o nosso servidor
    ws.on('message',data => { // essa função recebe um parametro data,que vai ser o dado que o usuario envio para o nosso servidor
        // enviado mensagem para todos os usuarios conectados,para enviamos uma mensagem para todos os usuarios iremos pega um método do wss que chama clients que um array onde contem todos os usuarios conectados no nosso servidor 
        wss.clients.forEach(client => client.send(data.toString())); // dessa forma estamos enviado o mesmo tipo de dados para todos os cliente do nosso servidor vizualizarem
    })
   // mensagem para ser enviada quando o cliente se conectar 
   console.log('Cliente conectado') 
})
