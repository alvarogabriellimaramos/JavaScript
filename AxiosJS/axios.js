// consumo da API,requisição do tipo get
const axios = require("axios")

async function FunctionGet(){
    // o primeiro parametro é a url é o segundo parametro pode ser um objeto de configuração 
    const data = await axios.get('https://economia.awesomeapi.com.br/last/EUR-BRL,BTC-BRL',{
        // esse método é responsavel por passa parametro para url de forma dinamica 
        params:{
            last: 'USD-BRL'
        },
        
    })
    return data 
}
FunctionGet().then(response => console.log(response))

// utilizando o axios de uma forma mas detalhada
axios({
    // o método que vamos utiliza,se é get,post,delete e etc...
    method: 'get',
    // url para fazer a requisição de pegar dados 
    url: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL',
}) // para requisição do tipo get por enquanto isso é o suficiente,esse objeto é chamado de object config(objeto de configuração

// no axios apenas a url é obrigatoria,caso não aja nenhum método o axios por padrão irá senta a requisição como get

// POST, Diferente do get que recuperar dados do banco de dados,a requisição do tipo post server para envia dados ao banco de dados,como um formulario com nome e senha de um usuario para ser salvo no banco de dados por exemplo
async function PostFunction(){
    // objeto com dados que queremos enviar para o servidor 
    const DataUser = {
        nome: 'Alvaro',
        idade: 18,
        profissão: 'Programador'
    }
    const data = await axios.post('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL',DataUser)
    return data
}

PostFunction().then(response => console.log(response))
