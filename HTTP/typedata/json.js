// Aqui estamos fazendo uma solicitação ao servidor do tipo get,para retorna os dados do tipo json para nossa aplicação dessa forma poderemos acessar e manipular os dados como quisermos 
const url = 'http://localhost:8080/'
async function Response(){
    const data = (await fetch(url)).json()
    return data
}
Response().then(res => console.log(res))
.catch(e => console.log(e))