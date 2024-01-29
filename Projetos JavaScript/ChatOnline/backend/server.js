const app = require('express')();
const {WebSocketServer} = require('ws');

const wss = new WebSocketServer({port:8080});

wss.on('connection',ws => {
    ws.on('error',error => console.log(error));
    ws.on('message',data => {
        wss.clients.forEach(client => client.send(data.toString()));
    });
    console.log('Usuario conectado');
});
