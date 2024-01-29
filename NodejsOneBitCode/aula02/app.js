// o express é uma framework minimalista,ele preza em ser o menor possivel e entregar so o importante para o dev,ele opera atráves de middlewares,os middlewares são funções que tem acesso tanto a requisição,quanto a resposta em uma aplicação web express,essas funções podem modifica a requisição ou resposta,encerra solicitação,ou chama um proximo middleware na pilha,os middlare podem processa dados da requisição antes que esses dados cheguem ás rotas,os middlware são utilizados para aunteticação e autorização de usuarios e etc...O express trabalha com o Chain of Resposibility que significa cadeia de responsabilidades,permite que os objetos seja encadeado,com o encademanto,cada objeto verifica se pode envia uma resposta,caso não possa ele passa para a proxima cadeia,isso é um padrão que o express se baseou 

const express = require('express');
const app = express(); // criando uma referencia do express e adicionado ao app 
// utilizando um middleware,o proprio express tem middlaware que ja vem com ele quando instalado,para usa um middleware utilizamos o método use e o middleware que queremos, o método use server para instalar middleware na nossa aplicação 
app.use(express.json()) // aqui estamos utilizando o express.json() que server nada mais nada menos para recebe o corpo da requisição em formato json e torna-lo acessivel no req.body,quando acessamos o req.body o corpo da requisição automaticamente foi transformado em um objeto javascript,ja que o express.json() faz essa conversão para gente
// o middleware recebe três parametros o request,response e a função next,que vai ser responsável por passa para proxima função se necessario,os middleware são função que são utilizadas para fazer alguma ação especifica,seja transforma um tipo de dado em outro,valida alguma informação,autentica um usuario,um middleware faz tudo isso,antes de passa o controle para a proxima função,
app.use((request,response,next) => {
    // quando não especificamos um caminho para o middleware ele acaba se tornado global mas também podemos especifica um caminho para o middleware para que ele seja limitado apenas a rota especificada 
})
app.use('/admin',(request,response,next) => {
    // esse middleware terá acesso apenas a rota admin
}) // os middleware podem realizar ações no ciclo de vida de uma solicitação http
// criado uma roda do tipo get,o primeiro parametro é o nome da rota,e o segundo vai ser a função responsavel por manipular a rota,um manipulador de rotas
const usuarios = [
    {nome: 'Alvaro Gabriel',idade:18,profissão: 'Dev'},
    {nome: 'Pedro Miguel',idade: 21,profissão: 'Engenheiro'},
    {nome: 'Mario Ramos',idade:22,profissão: 'Gastronomo'}
]
app.get('/json',(request,response) => {
    console.log(request.body)
    response.status(200).json(usuarios)
}) // o response server para envia uma resposta para o usuario nesse caso estamos enviado uma resposta do tipo json,ja o request server para recebe dados do lado do cliente

// iniciado o servidor 
const PORT = 8080
app.listen(PORT,() => console.log('O servidor está rodando na porta ' + PORT))