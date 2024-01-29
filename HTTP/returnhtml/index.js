// utilizando o modulo http também podemos fazer com que o nosso servidor retorne uma pagina html,para isso vamos utiliza o modulo fs 

const http = require('http')
const fs = require("fs").promises
const PORT = 8081
const requestListener = (req,res) => {
    fs.readFile('./index.html').then(content => {
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        res.end(content)
    })
}
http.createServer(requestListener).listen(PORT,function(){
    console.log('Escutando')
})